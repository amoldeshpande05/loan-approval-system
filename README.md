# loan-approval-system


Steps:
1. Create the CATALOG
    apic catalogs:create CATALOG_NAME --server=SERVER --organization=ORG
2. Publish the PRODUCT
    apic publish PRODUCT_NAME.yaml --server=SERVER --organization=ORG  --catalo
    g=CATALOG_NAME
3. Test
    https://api.{REGION}.apiconnect.appdomain.cloud/{ORGANIZATION}/{CATELOG}/{ENDPOINT}?{PARAMS}
