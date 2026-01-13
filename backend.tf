terraform {
  backend "azurerm" {
    resource_group_name  = "VSP-TCH"
    storage_account_name = "vesperstorage"
    container_name       = "tfstate"
    key                  = "vesperstorage/terraform.tfstate"
  }

}