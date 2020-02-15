# Aura Data Tables

This repo implements one dimensional table and two dimensional table.

## How to start

Pull the repo on your local machine, then run these commands with SFDX:

$ sfdx force:org:create -f config/project-scratch-def.json --setalias auradatatables --durationdays 1 --setdefaultusername --json --loglevel fatal

$ sfdx force:source:push --json --loglevel fatal --forceoverwrite

$ sfdx force:org:open -p "/lightning/cmp/c__demo"

## Folder Structure

force-app

└── main

    ├── data-table
    
    │   └── aura
    
    │       ├── DataTable
    
    │       │   ├── DataTable.cmp
    
    │       │   ├── DataTable.cmp-meta.xml
    
    │       │   ├── DataTable.css
    
    │       │   └── DataTableController.js
    
    │       ├── InputField
    
    │       │   ├── InputField.cmp
    
    │       │   └── InputField.cmp-meta.xml
    
    │       ├── OutputField
    
    │       │   ├── OutputField.cmp
    
    │       │   ├── OutputField.cmp-meta.xml
    
    │       │   ├── OutputField.css
    
    │       │   └── OutputFieldController.js
    
    │       ├── TwoDimensionTable
    
    │       │   ├── TwoDimensionTable.cmp
    
    │       │   ├── TwoDimensionTable.cmp-meta.xml
    
    │       │   ├── TwoDimensionTable.css
    
    │       │   ├── TwoDimensionTableController.js
    
    │       │   ├── TwoDimensionTableHelper.js
    
    │       │   └── TwoDimensionTableRenderer.js
    
    │       └── TwoDimentionTableHeaderItem
    
    │           ├── TwoDimentionTableHeaderItem.cmp
    
    │           ├── TwoDimentionTableHeaderItem.cmp-meta.xml
    
    │           ├── TwoDimentionTableHeaderItem.css
    
    │           └── TwoDimentionTableHeaderItemController.js
    
    └── default
    
        └── aura
    
            └── Demo
    
                ├── Demo.cmp
    
                ├── Demo.cmp-meta.xml
    
                ├── Demo.css
    
                └── DemoController.js