using my.bookshop as my from '../db/schema';

service CatalogService {
     entity Books as projection on my.Books;
     entity personalDetails as projection on my.personalDetails;
     entity Address as projection on my.Address;
}
