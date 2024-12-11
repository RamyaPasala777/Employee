namespace my.bookshop;

using {cuid} from '@sap/cds/common';

entity Books {
  key ID            : Integer;
      name          : String;
      age           : Integer;
      dept          : String;
      sal           : Integer;
      qualification : Association to personalDetails;
      address:Association to Address;

}

entity personalDetails : cuid {
  qualification : String;
  book          : Association to Books
}

entity Address : cuid {
  doorNo : String;
  street : String;
  city   : String;
  state  : String;
  books:Association to Books;
}
