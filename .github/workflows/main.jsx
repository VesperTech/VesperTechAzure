import React, { useState, useEffect } from 'react';
import { Cloud, Database, Code, Globe, FileText, Check, ChevronRight, Terminal, Zap, Shield } from 'lucide-react';

export default function AzureCloudResumeChallenge() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleComplete = (index) => {
    setCompletedSteps(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const steps = [
    {
      number: 1,
      title: "Build Your Resume (HTML & CSS)",
      icon: <FileText className="w-6 h-6" />,
      description: "Create a professional resume using semantic HTML5 and modern CSS",
      details: [
        "Use semantic HTML elements (<header>, <section>, <article>)",
        "Implement responsive design with CSS Grid or Flexbox",
        "Add your skills, experience, education, and projects",
        "Keep it clean and professional - remember, this showcases your skills!"
      ],
      code: `<!-- Example HTML Structure -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Cloud Engineer</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Your Name</h1>
        <p>Cloud Solutions Architect</p>
    </header>
    <section class="experience">
        <h2>Experience</h2>
        <!-- Your content -->
    </section>
</body>
</html>`,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 2,
      title: "Deploy to Azure Static Web Apps",
      icon: <Cloud className="w-6 h-6" />,
      description: "Host your resume on Azure's global CDN with HTTPS",
      details: [
        "Create an Azure account (free tier available)",
        "Use Azure Static Web Apps for automatic deployment",
        "Connect your GitHub repository for CI/CD",
        "Get automatic HTTPS certificate and global distribution"
      ],
      code: `# Deploy using Azure CLI
az staticwebapp create \\
    --name my-resume-app \\
    --resource-group resume-rg \\
    --source https://github.com/yourusername/cloud-resume \\
    --location "East US 2" \\
    --branch main \\
    --app-location "/" \\
    --login-with-github`,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: 3,
      title: "Configure Custom Domain (Optional)",
      icon: <Globe className="w-6 h-6" />,
      description: "Make your resume accessible via your own domain name",
      details: [
        "Purchase a domain from a registrar (GoDaddy, Namecheap, etc.)",
        "Add custom domain in Azure Static Web Apps settings",
        "Update DNS records (CNAME) to point to Azure",
        "Wait for DNS propagation (usually 15 minutes - 24 hours)"
      ],
      code: `# DNS Configuration Example
Type: CNAME
Name: www
Value: your-static-app.azurestaticapps.net
TTL: 3600

Type: TXT
Name: @
Value: azure-validation-token
TTL: 3600`,
      color: "from-green-500 to-teal-500"
    },
    {
      number: 4,
      title: "Add Visitor Counter with JavaScript",
      icon: <Code className="w-6 h-6" />,
      description: "Implement a visitor counter using vanilla JavaScript or a framework",
      details: [
        "Create JavaScript to fetch visitor count from API",
        "Display the count dynamically on your resume",
        "Handle loading states and errors gracefully",
        "Consider adding animation for the counter increment"
      ],
      code: `// Visitor Counter JavaScript
async function updateVisitorCount() {
    try {
        const response = await fetch(
            'https://your-function-app.azurewebsites.net/api/GetVisitorCount'
        );
        const data = await response.json();
        document.getElementById('visitor-count').textContent = data.count;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        document.getElementById('visitor-count').textContent = 'Error';
    }
}

// Call on page load
window.addEventListener('DOMContentLoaded', updateVisitorCount);`,
      color: "from-yellow-500 to-orange-500"
    },
    {
      number: 5,
      title: "Create Azure Cosmos DB",
      icon: <Database className="w-6 h-6" />,
      description: "Set up a NoSQL database to store your visitor counter",
      details: [
        "Create Azure Cosmos DB account (serverless mode recommended for cost)",
        "Choose Core (SQL) API for easy querying",
        "Create a database named 'ResumeDB'",
        "Create a container named 'VisitorCount' with partition key '/id'"
      ],
      code: `# Create Cosmos DB using Azure CLI
az cosmosdb create \\
    --name resume-cosmos-db \\
    --resource-group resume-rg \\
    --locations regionName="East US" failoverPriority=0 \\
    --capabilities EnableServerless

az cosmosdb sql database create \\
    --account-name resume-cosmos-db \\
    --resource-group resume-rg \\
    --name ResumeDB

az cosmosdb sql container create \\
    --account-name resume-cosmos-db \\
    --database-name ResumeDB \\
    --resource-group resume-rg \\
    --name VisitorCount \\
    --partition-key-path "/id"`,
      color: "from-red-500 to-pink-500"
    },
    {
      number: 6,
      title: "Build Azure Functions API",
      icon: <Zap className="w-6 h-6" />,
      description: "Create serverless functions to handle counter logic",
      details: [
        "Create two HTTP-triggered functions: GetVisitorCount and IncrementCount",
        "Use Azure Functions Core Tools or VS Code extension",
        "Implement logic to read from and write to Cosmos DB",
        "Enable CORS to allow requests from your frontend"
      ],
      code: `// GetVisitorCount Function (Python)
import azure.functions as func
from azure.cosmos import CosmosClient
import os

def main(req: func.HttpRequest) -> func.HttpResponse:
    endpoint = os.environ["COSMOS_ENDPOINT"]
    key = os.environ["COSMOS_KEY"]
    
    client = CosmosClient(endpoint, key)
    database = client.get_database_client("ResumeDB")
    container = database.get_container_client("VisitorCount")
    
    # Read current count
    item = container.read_item(item="visitor-count", partition_key="visitor-count")
    current_count = item["count"]
    
    # Increment count
    item["count"] = current_count + 1
    container.upsert_item(item)
    
    return func.HttpResponse(
        f'{{"count": {item["count"]}}}',
        mimetype="application/json",
        status_code=200
    )`,
      color: "from-indigo-500 to-purple-500"
    },
    {
      number: 7,
      title: "Implement CI/CD with GitHub Actions",
      icon: <Terminal className="w-6 h-6" />,
      description: "Automate testing and deployment of your infrastructure and code",
      details: [
        "Create GitHub Actions workflows for frontend and backend",
        "Add automated tests (unit tests, integration tests)",
        "Deploy Azure Functions automatically on push to main",
        "Validate infrastructure changes before deployment"
      ],
      code: `# GitHub Actions Workflow (.github/workflows/deploy.yml)
name: Deploy Cloud Resume

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy-infrastructure:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Azure Login
        uses: azure/login@v1
        with:
          creds: \${{ secrets.AZURE_CREDENTIALS }}
      
      - name: Deploy ARM Template
        uses: azure/arm-deploy@v1
        with:
          resourceGroupName: resume-rg
          template: ./infrastructure/template.json
          parameters: ./infrastructure/parameters.json
  
  deploy-functions:
    runs-on: ubuntu-latest
    needs: deploy-infrastructure
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'
      
      - name: Install dependencies
        run: |
          cd api
          pip install -r requirements.txt
      
      - name: Run tests
        run: |
          cd api
          pytest
      
      - name: Deploy to Azure Functions
        uses: Azure/functions-action@v1
        with:
          app-name: \${{ secrets.AZURE_FUNCTION_APP_NAME }}
          package: ./api
          publish-profile: \${{ secrets.AZURE_FUNCTION_PUBLISH_PROFILE }}`,
      color: "from-cyan-500 to-blue-500"
    },
    {
      number: 8,
      title: "Infrastructure as Code (ARM/Bicep/Terraform)",
      icon: <Shield className="w-6 h-6" />,
      description: "Define your Azure resources as code for reproducibility",
      details: [
        "Choose IaC tool: ARM Templates, Bicep, or Terraform",
        "Define all resources: Static Web App, Functions, Cosmos DB",
        "Version control your infrastructure code",
        "Use Azure Resource Manager for deployment"
      ],
      code: `// Bicep Template Example (main.bicep)
param location string = resourceGroup().location
param appName string = 'cloud-resume'

// Static Web App
resource staticWebApp 'Microsoft.Web/staticSites@2022-03-01' = {
  name: '\${appName}-static-app'
  location: location
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    repositoryUrl: 'https://github.com/yourusername/cloud-resume'
    branch: 'main'
    buildProperties: {
      appLocation: '/'
      apiLocation: 'api'
    }
  }
}

// Cosmos DB Account (Serverless)
resource cosmosAccount 'Microsoft.DocumentDB/databaseAccounts@2023-04-15' = {
  name: '\${appName}-cosmos'
  location: location
  kind: 'GlobalDocumentDB'
  properties: {
    databaseAccountOfferType: 'Standard'
    locations: [
      {
        locationName: location
        failoverPriority: 0
      }
    ]
    capabilities: [
      {
        name: 'EnableServerless'
      }
    ]
  }
}

// Function App
resource functionApp 'Microsoft.Web/sites@2022-03-01' = {
  name: '\${appName}-functions'
  location: location
  kind: 'functionapp'
  properties: {
    serverFarmId: hostingPlan.id
    siteConfig: {
      appSettings: [
        {
          name: 'COSMOS_ENDPOINT'
          value: cosmosAccount.properties.documentEndpoint
        }
      ]
    }
  }
}`,
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" 
               style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" 
               style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-pulse" 
               style={{ animationDuration: '5s', animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm">
            <span className="text-cyan-400 font-semibold tracking-wide">Master Cloud Engineering</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Azure Cloud
            </span>
            <br />
            <span className="text-white">Resume Challenge</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Build a serverless resume website on Azure and learn cloud fundamentals through hands-on practice.
            Master Azure services, CI/CD, and Infrastructure as Code.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <div className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 rounded-lg border border-slate-700 backdrop-blur-sm">
              <Cloud className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-300">8 Core Steps</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 rounded-lg border border-slate-700 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-slate-300">Serverless Architecture</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 rounded-lg border border-slate-700 backdrop-blur-sm">
              <Terminal className="w-5 h-5 text-blue-400" />
              <span className="text-slate-300">Full CI/CD Pipeline</span>
            </div>
          </div>

          <button 
            onClick={() => document.getElementById('steps').scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Start Building
            <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-cyan-400 rounded-full" />
          </div>
        </div>
      </header>

      {/* Architecture Diagram */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Architecture Overview
            </span>
          </h2>

          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
            {/* Visual Architecture Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Frontend */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6 text-center">
                  <Globe className="w-12 h-12 mx-auto mb-3 text-cyan-400" />
                  <h3 className="font-bold text-lg mb-2">Frontend</h3>
                  <p className="text-sm text-slate-400">HTML, CSS, JavaScript</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6 text-center">
                  <Cloud className="w-12 h-12 mx-auto mb-3 text-purple-400" />
                  <h3 className="font-bold text-lg mb-2">Azure Static Web Apps</h3>
                  <p className="text-sm text-slate-400">Global CDN + HTTPS</p>
                </div>
              </div>

              {/* Backend */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-6 text-center">
                  <Zap className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
                  <h3 className="font-bold text-lg mb-2">Azure Functions</h3>
                  <p className="text-sm text-slate-400">Serverless API</p>
                </div>
                <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-xl p-6 text-center">
                  <Database className="w-12 h-12 mx-auto mb-3 text-red-400" />
                  <h3 className="font-bold text-lg mb-2">Cosmos DB</h3>
                  <p className="text-sm text-slate-400">NoSQL Database</p>
                </div>
              </div>

              {/* DevOps */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 text-center">
                  <Terminal className="w-12 h-12 mx-auto mb-3 text-green-400" />
                  <h3 className="font-bold text-lg mb-2">GitHub Actions</h3>
                  <p className="text-sm text-slate-400">CI/CD Pipeline</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 rounded-xl p-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-3 text-indigo-400" />
                  <h3 className="font-bold text-lg mb-2">Infrastructure as Code</h3>
                  <p className="text-sm text-slate-400">Bicep/ARM Templates</p>
                </div>
              </div>
            </div>

            {/* Flow Arrows */}
            <div className="text-center text-slate-500 text-sm">
              <p>User → Static Web App → Azure Functions → Cosmos DB → Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="steps" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Step-by-Step Guide
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">
            Follow these steps to build your cloud resume. Check off each step as you complete it!
          </p>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`group relative transition-all duration-500 ${
                  activeStep === index ? 'scale-[1.02]' : ''
                }`}
              >
                <div 
                  className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-2 rounded-2xl p-8 cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                    completedSteps.includes(index)
                      ? 'border-green-500/50 shadow-2xl shadow-green-500/20'
                      : 'border-slate-700 hover:border-slate-600'
                  } ${
                    activeStep === index ? 'shadow-2xl' : ''
                  }`}
                  onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                >
                  {/* Step Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      {step.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm font-semibold">
                          Step {step.number}
                        </span>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-slate-400 text-lg">{step.description}</p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleComplete(index);
                      }}
                      className={`flex-shrink-0 w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                        completedSteps.includes(index)
                          ? 'bg-green-500 border-green-500 hover:bg-green-600'
                          : 'border-slate-600 hover:border-slate-500'
                      }`}
                    >
                      {completedSteps.includes(index) && <Check className="w-6 h-6" />}
                    </button>
                  </div>

                  {/* Expandable Content */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeStep === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-6 border-t border-slate-700">
                      {/* Details */}
                      <h4 className="font-semibold text-lg mb-4 text-cyan-400">Key Tasks:</h4>
                      <ul className="space-y-3 mb-6">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-300">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Code Example */}
                      <h4 className="font-semibold text-lg mb-4 text-purple-400">Code Example:</h4>
                      <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 overflow-x-auto">
                        <pre className="text-sm text-slate-300 font-mono">
                          <code>{step.code}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-slate-700 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress Summary */}
          <div className="mt-16 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8 text-center backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-4">
              Progress: {completedSteps.length} / {steps.length}
            </h3>
            <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden mb-6">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500 rounded-full"
                style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
              />
            </div>
            {completedSteps.length === steps.length ? (
              <div className="text-green-400 text-xl font-semibold">
                🎉 Congratulations! You've completed the Azure Cloud Resume Challenge!
              </div>
            ) : (
              <p className="text-slate-400">
                Keep going! You're {Math.round((completedSteps.length / steps.length) * 100)}% of the way there.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Additional Resources
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Azure Documentation",
                description: "Official Azure docs for all services used in this challenge",
                link: "docs.microsoft.com/azure",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "GitHub Actions",
                description: "Learn about CI/CD automation with GitHub Actions",
                link: "docs.github.com/actions",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Bicep Language",
                description: "Infrastructure as Code with Azure Bicep",
                link: "docs.microsoft.com/azure/bicep",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Azure Functions",
                description: "Serverless compute for your API endpoints",
                link: "docs.microsoft.com/azure/functions",
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "Cosmos DB Tutorial",
                description: "Get started with Azure's NoSQL database",
                link: "docs.microsoft.com/azure/cosmos-db",
                color: "from-red-500 to-pink-500"
              },
              {
                title: "Static Web Apps",
                description: "Deploy modern web apps to Azure",
                link: "docs.microsoft.com/azure/static-web-apps",
                color: "from-indigo-500 to-blue-500"
              }
            ].map((resource, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${resource.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-slate-400 mb-4">{resource.description}</p>
                <div className="text-cyan-400 text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  {resource.link}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Pro Tips
            </span>
          </h2>

          <div className="space-y-6">
            {[
              {
                icon: "💡",
                tip: "Start Simple",
                description: "Begin with a basic HTML resume before adding advanced features. Get it deployed first, then iterate."
              },
              {
                icon: "📝",
                tip: "Document Everything",
                description: "Keep a blog or README documenting your learning process. This itself becomes a valuable portfolio piece."
              },
              {
                icon: "🔒",
                tip: "Use Managed Identities",
                description: "Avoid storing credentials in code. Use Azure Managed Identities for secure service-to-service authentication."
              },
              {
                icon: "💰",
                tip: "Monitor Costs",
                description: "Use Azure's free tier and serverless options. Set up budget alerts to avoid surprise charges."
              },
              {
                icon: "🧪",
                tip: "Write Tests",
                description: "Add unit tests for your Azure Functions. This demonstrates professional development practices."
              },
              {
                icon: "🚀",
                tip: "Share Your Journey",
                description: "Post about your progress on LinkedIn. Many have landed jobs by showcasing this project!"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-cyan-400">{item.tip}</h3>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            Built with React and Tailwind CSS • Inspired by the Cloud Resume Challenge
          </p>
          <p className="text-slate-500 text-sm">
            Good luck on your cloud journey! 🚀
          </p>
        </div>
      </footer>
    </div>
  );
}