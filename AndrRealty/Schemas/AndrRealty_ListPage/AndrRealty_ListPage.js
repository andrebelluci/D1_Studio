define("AndrRealty_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AndrRealty"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "AndrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_AndrName",
							"caption": "#ResourceString(PDS_AndrName)#",
							"dataValueType": 1
						},
						{
							"id": "66678a7b-953f-5373-780e-8ca077548bd9",
							"code": "PDS_AndrPriceUSD",
							"caption": "#ResourceString(PDS_AndrPriceUSD)#",
							"dataValueType": 6
						},
						{
							"id": "2c1a039e-c3ac-c335-b570-2435fdea58af",
							"code": "PDS_AndrType",
							"caption": "#ResourceString(PDS_AndrType)#",
							"dataValueType": 10
						},
						{
							"id": "18cd3fee-b754-2ee2-f450-eed382b0fea5",
							"code": "PDS_AndrOfferType",
							"caption": "#ResourceString(PDS_AndrOfferType)#",
							"dataValueType": 10
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "faeb7745-ca93-d42b-e853-71b98479f70a",
							"code": "PDS_AndrArea",
							"caption": "#ResourceString(PDS_AndrArea)#",
							"dataValueType": 32
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_AndrName": {
						"modelConfig": {
							"path": "PDS.AndrName"
						}
					},
					"PDS_AndrPriceUSD": {
						"modelConfig": {
							"path": "PDS.AndrPriceUSD"
						}
					},
					"PDS_AndrType": {
						"modelConfig": {
							"path": "PDS.AndrType"
						}
					},
					"PDS_AndrOfferType": {
						"modelConfig": {
							"path": "PDS.AndrOfferType"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_AndrArea": {
						"modelConfig": {
							"path": "PDS.AndrArea"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "CreatedBy"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "AndrRealty",
					"attributes": {
						"AndrName": {
							"path": "AndrName"
						},
						"AndrPriceUSD": {
							"path": "AndrPriceUSD"
						},
						"AndrType": {
							"path": "AndrType"
						},
						"AndrOfferType": {
							"path": "AndrOfferType"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						},
						"AndrArea": {
							"path": "AndrArea"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});