import styled from "styled-components";

export const Container = styled.div`
   margin-top: 4rem;

   .delete-button {
      border: none;
      background: rgba(0,0,0,0);
      filter: brightness(0.1) sepia(1) saturate(10000%);
   }

   table {
      width: 100%;
      border-spacing: 0 0.5rem;

      th {
	 color: var(--text-body);
	 font-weight: 400;
	 padding: 1rem 2rem;
	 text-align: left;
	 line-height: 1.5rem;

      }

      td {
	 padding: 1rem 2rem;
	 border: 0;
	 background: var(--shape);
	 color: var(--text-body);
	 border-radius: 0.25rem;

	 &:first-child {
	 color: var(--text-title);
	 }

	 &.withdraw {
	    color: var(--red);
	 }
	 &.deposit {
	    color: var(--green);
	 }
      }


   }
`;
