


export const schema = `#graphql

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    googleId: String!
    role: String!
    avatar: String!
    verified: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type Product{
    id: ID!
    name: String!
    description: String!
    link: String!
    price: Int!
    category: String!
    createdAt: String!
    updatedAt: String!

  }

  type Course{
    id: ID!
    name: String!
    description: String!
    link: String!
    price: Int!
    totalNumberOfLectures: Int!
    soldCount: Int!
    courseDuration: Int!
    studentsBoughtList: [String!]!

    #we can also , make instructor to User Type
    # instructor: User!
    instructor: String!
    category: String!
    createdAt: String!
    updatedAt: String!
  }

  type Section{
    id: ID!
    name: String!
    description: String!
    link: String!
    price: Int!
    totalNumberOfLectures: Int!
    soldCount: Int!
    courseDuration: Int!
    studentsBoughtList: [String!]!
    category: String!
    createdAt: String!
    updatedAt: String!
  }

  type Lecture{
    id: ID!
    name: String!
    description: String!
    link: String!
    price: Int!
    totalNumberOfLectures: Int!
    soldCount: Int!
    courseDuration: Int!
    studentsBoughtList: [String!]!
    category: String!
    createdAt: String!
    updatedAt: String!
  }


  type Query {
    hello: String
    wow: String
    users : [User]
    courses : [Course]
    products : [Product]
    sections  : [Section]
    lectures  : [Lecture]

    course(id:ID!): Course
  }
`;