define("AndrRealtyVisitPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_leob3qz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.AndrRealtyVisitDS_AndrVisitDateTime_afqu6rp",
					"labelPosition": "above",
					"control": "$AndrRealtyVisitDS_AndrVisitDateTime_afqu6rp"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_c1yelw5",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AndrRealtyVisitDS_AndrPotentialCustomer_6ml2i9t",
					"labelPosition": "above",
					"control": "$AndrRealtyVisitDS_AndrPotentialCustomer_6ml2i9t",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_4xzvg8l",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4xzvg8l_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_c1yelw5",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_tdal05m",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.AndrRealtyVisitDS_AndrComment_8k0zheg",
					"labelPosition": "above",
					"control": "$AndrRealtyVisitDS_AndrComment_8k0zheg"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"AndrRealtyVisitDS_AndrVisitDateTime_afqu6rp": {
						"modelConfig": {
							"path": "AndrRealtyVisitDS.AndrVisitDateTime"
						}
					},
					"AndrRealtyVisitDS_AndrPotentialCustomer_6ml2i9t": {
						"modelConfig": {
							"path": "AndrRealtyVisitDS.AndrPotentialCustomer"
						}
					},
					"AndrRealtyVisitDS_AndrComment_8k0zheg": {
						"modelConfig": {
							"path": "AndrRealtyVisitDS.AndrComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"AndrRealtyVisitDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "AndrRealtyVisit"
							}
						}
					},
					"primaryDataSourceName": "AndrRealtyVisitDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});