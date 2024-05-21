define("AndrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "AndrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "e85fe030-1b18-4c0b-b7f8-653470e46ac7",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "AndrPushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_800311l_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "process-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AndrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.AndrName",
					"control": "$AndrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AndrPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AndrPriceUSD_cifln4i",
					"labelPosition": "auto",
					"control": "$PDS_AndrPriceUSD_cifln4i"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AndrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AndrArea_p02c8tx",
					"labelPosition": "auto",
					"control": "$PDS_AndrArea_p02c8tx"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AndrCommissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AndrCommissionUSD_8ijo5d2",
					"labelPosition": "auto",
					"control": "$PDS_AndrCommissionUSD_8ijo5d2",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AndrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AndrType_9kc33a6",
					"labelPosition": "auto",
					"control": "$PDS_AndrType_9kc33a6",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_lptfwog",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lptfwog_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "AndrType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AndrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AndrOfferType_ss7o0mb",
					"labelPosition": "auto",
					"control": "$PDS_AndrOfferType_ss7o0mb",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_j4ci3z2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_j4ci3z2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "AndrOfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AndrComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_AndrComment_xa6r0ot",
					"labelPosition": "auto",
					"control": "$PDS_AndrComment_xa6r0ot",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AndrManager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AndrManager_ex7od1s",
					"labelPosition": "auto",
					"control": "$PDS_AndrManager_ex7od1s",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_2io6xad",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_2io6xad_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "AndrManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AndrCountry",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AndrCountry_ktcixho",
					"labelPosition": "auto",
					"control": "$PDS_AndrCountry_ktcixho",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_82ci8rn",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_82ci8rn_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "AndrCountry",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AndrCommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AndrOfferTypeAndrCommissionPercent",
					"control": "$PDS_AndrOfferTypeAndrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "AndrCity",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AndrCity_x93ejga",
					"labelPosition": "auto",
					"control": "$PDS_AndrCity_x93ejga",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_azlbhwr",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_azlbhwr_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "AndrCity",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_kvjf13r",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_kvjf13r_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_522k6rg",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_kvjf13r",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_p9lk5zh",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_522k6rg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_q1th6hv",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_q1th6hv_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "AndrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "AndrParentRealty",
									"value": "$AndrParentRealty"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_p9lk5zh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_0ng8qbl",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_0ng8qbl_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_8dky6tcDS"
						}
					}
				},
				"parentName": "FlexContainer_p9lk5zh",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_yg0nn4c",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_yg0nn4c_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_p9lk5zh",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_691amhf",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_691amhf_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_8dky6tc"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_yg0nn4c",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_7edeky5",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_7edeky5_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AndrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_yg0nn4c",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_jjfaln7",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_jjfaln7_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_8dky6tc"
					]
				},
				"parentName": "FlexContainer_p9lk5zh",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_t6co5l5",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_kvjf13r",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_8dky6tc",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_8dky6tc",
					"selectionState": "$GridDetail_8dky6tc_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_8dky6tc_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_8dky6tcDS_Id",
					"columns": [
						{
							"id": "03b5d2af-fdc7-0897-5a1f-73235ecd97b1",
							"code": "GridDetail_8dky6tcDS_AndrVisitDateTime",
							"caption": "#ResourceString(GridDetail_8dky6tcDS_AndrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "418493e8-9fd7-bfc7-5474-62ccdd0bd37a",
							"code": "GridDetail_8dky6tcDS_AndrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_8dky6tcDS_AndrPotentialCustomer)#",
							"dataValueType": 10,
							"width": 225
						},
						{
							"id": "da2681d2-c5cb-0468-02c4-192862750a19",
							"code": "GridDetail_8dky6tcDS_AndrComment",
							"caption": "#ResourceString(GridDetail_8dky6tcDS_AndrComment)#",
							"dataValueType": 28
						},
						{
							"id": "5494e227-63f9-346b-bd7d-fd15f9bfab3b",
							"code": "GridDetail_8dky6tcDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_8dky6tcDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "937ea8e9-3fe0-a9a8-5380-83f336196e77",
							"code": "GridDetail_8dky6tcDS_AndrParentRealty",
							"caption": "#ResourceString(GridDetail_8dky6tcDS_AndrParentRealty)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_t6co5l5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_8dky6tc_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_8dky6tcDS",
							"filters": "$GridDetail_8dky6tc | crt.ToCollectionFilters : 'GridDetail_8dky6tc' : $GridDetail_8dky6tc_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_8dky6tc_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetail_8dky6tc",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_8dky6tc_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_8dky6tcDS",
							"filters": "$GridDetail_8dky6tc | crt.ToCollectionFilters : 'GridDetail_8dky6tc' : $GridDetail_8dky6tc_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_8dky6tc_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_8dky6tc_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_8dky6tc_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_8dky6tc",
							"filters": "$GridDetail_8dky6tc | crt.ToCollectionFilters : 'GridDetail_8dky6tc' : $GridDetail_8dky6tc_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_8dky6tc_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_8dky6tc",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_8dky6tc_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetail_8dky6tc_DeleteBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_8dky6tcDS",
							"filters": "$GridDetail_8dky6tc | crt.ToCollectionFilters : 'GridDetail_8dky6tc' : $GridDetail_8dky6tc_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_8dky6tc_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "GridDetail_8dky6tc",
				"propertyName": "bulkActions",
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
					"AndrName": {
						"modelConfig": {
							"path": "PDS.AndrName"
						}
					},
					"PDS_AndrPriceUSD_cifln4i": {
						"modelConfig": {
							"path": "PDS.AndrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_AndrComment_xa6r0ot": {
						"modelConfig": {
							"path": "PDS.AndrComment"
						}
					},
					"PDS_AndrType_9kc33a6": {
						"modelConfig": {
							"path": "PDS.AndrType"
						}
					},
					"PDS_AndrOfferType_ss7o0mb": {
						"modelConfig": {
							"path": "PDS.AndrOfferType"
						}
					},
					"PDS_AndrArea_p02c8tx": {
						"modelConfig": {
							"path": "PDS.AndrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_AndrManager_ex7od1s": {
						"modelConfig": {
							"path": "PDS.AndrManager"
						}
					},
					"PDS_AndrCommissionUSD_8ijo5d2": {
						"modelConfig": {
							"path": "PDS.AndrCommissionUSD"
						}
					},
					"PDS_AndrOfferTypeAndrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.AndrOfferTypeAndrCommissionPercent"
						}
					},
					"PDS_AndrCountry_ktcixho": {
						"modelConfig": {
							"path": "PDS.AndrCountry"
						}
					},
					"PDS_AndrCity_x93ejga": {
						"modelConfig": {
							"path": "PDS.AndrCity"
						}
					},
					"GridDetail_8dky6tc": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_8dky6tcDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_8dky6tcDS_AndrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_8dky6tcDS.AndrVisitDateTime"
									}
								},
								"GridDetail_8dky6tcDS_AndrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_8dky6tcDS.AndrPotentialCustomer"
									}
								},
								"GridDetail_8dky6tcDS_AndrComment": {
									"modelConfig": {
										"path": "GridDetail_8dky6tcDS.AndrComment"
									}
								},
								"GridDetail_8dky6tcDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_8dky6tcDS.CreatedOn"
									}
								},
								"GridDetail_8dky6tcDS_AndrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_8dky6tcDS.AndrParentRealty"
									}
								},
								"GridDetail_8dky6tcDS_Id": {
									"modelConfig": {
										"path": "GridDetail_8dky6tcDS.Id"
									}
								}
							}
						}
					},
					"AndrParentRealty": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_8dky6tcDS": [
							{
								"attributePath": "AndrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "AndrRealty",
							"attributes": {
								"AndrOfferTypeAndrCommissionPercent": {
									"path": "AndrOfferType.AndrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_8dky6tcDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AndrRealtyVisit",
							"attributes": {
								"AndrVisitDateTime": {
									"path": "AndrVisitDateTime"
								},
								"AndrPotentialCustomer": {
									"path": "AndrPotentialCustomer"
								},
								"AndrComment": {
									"path": "AndrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"AndrParentRealty": {
									"path": "AndrParentRealty"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          {
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_AndrPriceUSD_cifln4i;
					this.console.log("Price = " + price);
					request.$context.PDS_AndrPriceUSD_cifln4i = price * 0.2;
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
          },
          {
            	request: "crt.HandleViewModelAttributeChangeRequest",
        		/* The custom implementation of the system query handler. */
        		handler: async (request, next) => {
        			if (request.attributeName === 'PDS_AndrPriceUSD_cifln4i' || 				// if price changed
        				request.attributeName === 'PDS_AndrOfferTypeAndrCommissionPercent') { 		// or percent changed
        				var price = await request.$context.PDS_AndrPriceUSD_cifln4i;
        				var percent = await request.$context.PDS_AndrOfferTypeAndrCommissionPercent;
        				var commission = price * percent / 100;
        				request.$context.PDS_AndrCommissionUSD_8ijo5d2 = commission;
        			}
			/* Call the next handler if it exists and return its result. */
    			return next?.handle(request);
        		}
          }
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
        	/* The validator type must contain a vendor prefix.
        	Format the validator type in PascalCase. */
        	"usr.DGValidator": {
        		validator: function (config) {
        			return function (control) {
        				let value = control.value;
        				let minValue = config.minValue;
        				let valueIsCorrect = value >= minValue;
        				var result;
        				if (valueIsCorrect) {
        					result = null;
        				} else {
        					result = {
        						"usr.DGValidator": {
        							message: config.message
        						}
        					};
        				}
        				return result;
        			};
        		},
        		params: [
        			{
        				name: "minValue"
        			},
        			{
          				name: "message"
        			}
        		],
        		async: false
        	}
        }/**SCHEMA_VALIDATORS*/
	};
});