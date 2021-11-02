import {Query, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';

export interface TestByNameResponse {
  esTagsByName: any[];
}

@Injectable()
export class FindTestByNameGQL extends Query<TestByNameResponse> {
  document = gql`
  query findTestByName ( $query: String!){
    testByName(lang: $lang, query: $query){
      ...AddressFields
    }
  }
  ${addressFragment}
  `;
}

export const addressFragment = gql`
fragment AddressFields on Address
{
    _id
    street
    city
    region
    regionCode
    country
    countryCode
    postalCode
    latitude
    longitude
    primary
}`;
