import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import Bookingtable from './managebooking-table'


const managebooking = ({match}) => {
  return (
    <>
  <Row>
        <Colxx xxs="12">
            
          <Breadcrumb heading="menu.booking" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Bookingtable />
        </Colxx>
      </Row>
   
    </>
  );
};
export default managebooking;
