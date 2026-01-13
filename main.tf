#define varaiables for service principle crednetials

variable "azure_subscription_id" { 
    default= "992ae502-348d-4903-9aa6-809c92caa1b3"
}


variable "azure_tenant_id" { 
    default= "7150d3a3-6de0-48f5-93a7-58e787a47c17"
}


variable  "azure_client_id" {
default= "1010336e-65f4-4ce4-b340-07ae55707655"
}

variable "azure_client_secret" {

 default = "SjU8Q~WSz8Npznpmt5WkFhekakOONrampZLXqc1h"

  sensitive = true
}

variable "github_token" {
  default= "Gr3@tJ0y324!"
  type      = string
  sensitive = true
}

variable "github_repo" {
  default ="https://github.com/VesperTech/VesperTechAzure"
  type = string
}


resource "azurerm_resource_group" "VesperTech" {
    name = "VSP-TCH"
    location = "eastus"
}


resource "azurerm_storage_account" "VesperStorage" {
    name = "vesperstorage"
    resource_group_name = "VSP-TCH"
    location = "eastus"
    account_tier = "Standard"
    account_replication_type = "LRS"
    account_kind = "StorageV2"
}
variable "prefix" {
  default = "VSP-SRV1"
}
resource "azurerm_virtual_network" "main" {
  name                = "${var.prefix}-network"
  address_space       = ["10.0.0.0/16"]
  location            = "eastus"
  resource_group_name = "VSP-TCH"
}

resource "azurerm_subnet" "internal" {
  name                 = "internal"
  resource_group_name  = "VSP-TCH"
  virtual_network_name = "${var.prefix}-network"
  address_prefixes     = ["10.0.2.0/24"]
}

resource "azurerm_network_interface" "main" {
  name                = "${var.prefix}-nic"
  location            = "eastus"
  resource_group_name = "VSP-TCH"

  ip_configuration {
    name                          = "VSP-SRV1-IP"
    subnet_id                     = azurerm_subnet.internal.id
    private_ip_address_allocation = "Dynamic"
  }
}

resource "azurerm_public_ip" "external" {
  name =  "${var.prefix}-Pub"
  resource_group_name = "VSP-TCH"
  location =  "eastus" 
  allocation_method = "Static"

  tags = {
    environment = "DMZ"
  }
}

resource "azurerm_windows_virtual_machine" "main" {
  name                  = "${var.prefix}-vm"
  location              = "eastus"
  resource_group_name   = "VSP-TCH"
  network_interface_ids = [azurerm_network_interface.main.id]
  size                  = "Standard_B2s"
  computer_name         = "${var.prefix}"
  admin_username        = "VSP-Admin"
  admin_password        = "Gr3@tKingdomofJoy324!"
  
 # Uncomment this line to delete the OS disk automatically when deleting the VM
  #delete_os_disk_on_termination = true

  # Uncomment this line to delete the data disks automatically when deleting the VM
  #delete_data_disks_on_termination = true


 os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"

  }
    source_image_reference {
    publisher = "MicrosoftWindowsServer"
    offer     = "WindowsServer"
    sku       = "2019-Datacenter"
    version   = "latest"
  }
} 

variable "prefix2" {
  default = "VSP-Ansible"
}

resource "azurerm_network_interface" "Ansible" {
  name                = "${var.prefix2}-nic"
  location            = "eastus"
  resource_group_name = "VSP-TCH"

  ip_configuration {
    name                          = "VSP-SRV2-IP"
    subnet_id                     = azurerm_subnet.internal.id
    private_ip_address_allocation = "Dynamic"
  }
}

resource "azurerm_public_ip" "external-Ansible" {
  name =  "${var.prefix2}-Pub"
  resource_group_name = "VSP-TCH"
  location =  "eastus" 
  allocation_method = "Static"

  tags = {
    environment = "Ansible"
  }
}



resource "azurerm_linux_virtual_machine" "Ansible" {
  name                  = "${var.prefix2}"
  location              = "eastus"
  resource_group_name   = "VSP-TCH"
  network_interface_ids = [azurerm_network_interface.Ansible.id]
  size                  = "Standard_B2s"
  computer_name         = "${var.prefix2}"
  admin_username        = "VSP-Admin"
  admin_password        = "Gr3@tKingdomofJoy324!"


  disable_password_authentication = false


 # Uncomment this line to delete the OS disk automatically when deleting the VM
  #delete_os_disk_on_termination = true

  # Uncomment this line to delete the data disks automatically when deleting the VM
  #delete_data_disks_on_termination = true


 os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"

  }
    source_image_reference {
    publisher = "RedHat"
    offer     = "RHEL"
    sku       = "8-LVM-gen2"
    version   = "latest"
  }
} 

resource "azurerm_static_web_app" "VesperTech-Web" {
  name                = "VesperTech-Web"
  resource_group_name = "VSP-TCH"
  location            = "eastus2"
  
  sku_tier            = "Free"
  sku_size            = "Free"
 
}

# Output the deployment token (needed for GitHub Actions)
output "deployment_token" {
  value     = azurerm_static_web_app.VesperTech-Web.api_key
  sensitive = true
}

output static_web_app_name {
  value = azurerm_static_web_app.VesperTech-Web.name
}

output "static_web_app_id" {
  value = azurerm_static_web_app.VesperTech-Web.id
}

output "static_web_app_url" {
  value = azurerm_static_web_app.VesperTech-Web.default_host_name
} 
