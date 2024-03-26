namespace attach;

entity order 
{
    key order_id : String;
    cust_id : String;
    prod_id : String;
    order_date : Date;
    order_price : String;
    bill : LargeBinary;
    status : String;
}
