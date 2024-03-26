using MyService as service from '../../srv/service';

annotate service.order with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'order_id',
            Value : order_id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'cust_id',
            Value : cust_id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'prod_id',
            Value : prod_id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'order_date',
            Value : order_date,
        },
        {
            $Type : 'UI.DataField',
            Label : 'order_price',
            Value : order_price,
        },
        {
            $Type : 'UI.DataField',
            Value : bill,
            Label : 'bill',
        },
        {
            $Type : 'UI.DataField',
            Value : status,
            Label : 'status',
        },
    ]
);
annotate service.order with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'order_id',
                Value : order_id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'cust_id',
                Value : cust_id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'prod_id',
                Value : prod_id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'order_date',
                Value : order_date,
            },
            {
                $Type : 'UI.DataField',
                Label : 'order_price',
                Value : order_price,
            },
            {
                $Type : 'UI.DataField',
                Label : 'bill',
                Value : bill,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
