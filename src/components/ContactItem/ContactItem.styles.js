// import styled from 'styled-components';

// export const SectionContainer = styled.div`
// width: 600px;
// margin: 20px auto;
//   padding: 20px;
//   background-color: #f5f5f5;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   text-align: center;

//   h2 {
//     font-size: 20px;
//     margin-bottom: 20px;
//   }
// `;

import styled from 'styled-components';

export const ContactItemContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContactName = styled.p`
  font-weight: bold;
`;

export const ContactNumber = styled.p`
  color: #555;
`;

export const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;
