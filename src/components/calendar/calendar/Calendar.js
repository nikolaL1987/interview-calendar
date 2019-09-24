import React, {useState} from 'react';
import styled from "styled-components";

const TableWrapper = styled.div`
  margin: 15px;
  -webkit-box-shadow: 2px 3px 7px 1px rgba(0,0,0,0.21);
  -moz-box-shadow: 2px 3px 7px 1px rgba(0,0,0,0.21);
  box-shadow: 2px 3px 7px 1px rgba(0,0,0,0.21);
  background-color: #fff;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  border-bottom: 1px solid #f5f5f5;
  text-align: center;
`;

const TableColumnInner = styled.div`
  border-bottom: 1px solid #f5f5f5;
  padding: 15px;
`;

const TableItem = styled.span`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
`;

const TableHeading = styled.span`
  color: #e1312f;
  font-weight: 700;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 15px;
  text-align: center;
`;

function Calendar({data}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <TableWrapper>
      <TableRow>
        <TableColumn>
          <TableHeading>
            Time slots
          </TableHeading>
        </TableColumn>
        {data.calendar.map((item, index) => (
          <TableColumn>
            <TableHeading>
              {item.date}
            </TableHeading>
          </TableColumn>
        ))}
      </TableRow>
      <TableRow>
        <TableColumn >
          {data.calendar && data.calendar[0] && data.calendar[0].timeslots.map(slot => {
            return (
              <TableColumnInner>
                <TableItem>{slot.from}</TableItem>
                <TableItem> - </TableItem>
                <TableItem>{slot.to}</TableItem>
              </TableColumnInner>
            )
            })
          }
        </TableColumn>
          {data.calendar.map((item, index) => {
            return (
              <TableColumn>
                {item.timeslots.map(slot => {
                  if(slot.status === 'free') {
                    return (
                      <TableColumnInner
                        onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}
                        style={{backgroundColor: isHovered ? '#e1312f' : ''}}
                      >
                        <TableItem>
                          {slot.status}
                        </TableItem>
                      </TableColumnInner>
                    )
                  }
                  return (
                    <TableColumnInner>
                      <TableItem>
                        {slot.status}
                      </TableItem>
                    </TableColumnInner>
                  )
                })
                }
              </TableColumn>
            )
          })}
      </TableRow>
    </TableWrapper>
  )
}

export default Calendar;
