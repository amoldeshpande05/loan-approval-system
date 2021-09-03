# loan-approval-system
APIC config :
server=apimanager.eu-gb.apiconnect.cloud.ibm.com
organization=amoldeshpandeinibmcom-dev
username=amoldeshpandeinibmcom
REGION=eu-gb
catelog=loan
ibmcloud login : 
ibmcloud login -a cloud.ibm.com -o "amol.deshpande@in.ibm.com" -s "dev"


Steps:
1. Create the CATALOG
    apic catalogs:create CATALOG_NAME --server=SERVER --organization=ORG
2. Publish the PRODUCT
    apic publish PRODUCT_NAME.yaml --server=SERVER --organization=ORG  --catalo
    g=CATALOG_NAME
3. Test
    https://api.eu-gb.apiconnect.appdomain.cloud/amoldeshpandeinibmcom-dev/loansystem/{ENDPOINT}?{PARAMS}
4. Clear
   apic products:clear --catalog=loan --organization=amoldeshpandeinibmcom-dev --server=apimanager.eu-gb.apiconnect.cloud.ibm.com --confirm loan