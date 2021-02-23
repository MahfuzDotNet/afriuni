import { gql } from '@apollo/client';

export const GET_FEATURED_UNIVERSITY = gql`
    query GET_FEATURED_UNIVERSITY ($type: String, $start_date: String, $random: Boolean) {
        universitiesFeatured (where: {start_date: $start_date, type: $type, random: $random}) {
            nodes {
              id
              databaseId
              featured_data {
                id
                image
              }
              featured_list {
                nodes {
                  id
                  databaseId
                  title
                  logo
                  slug
                  course_count
                  locations {
                    nodes {
                      name
                      is_country
                    }
                  }
                  featuredImage {
                    node {
                      sourceUrl
                      link
                    }
                  }
                }
              }
            }    
        }       
    }
`
