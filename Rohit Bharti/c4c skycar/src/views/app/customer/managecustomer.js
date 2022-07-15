import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import Managecustomer from './managecustomer-table';

const managecustomer = ({match}) => {
  return (
    <>
 <Row>
        <Colxx xxs="12">
            
          <Breadcrumb heading="menu.managecustomer" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Managecustomer />
        </Colxx>
      </Row>
   
    </>
  );
};
export default managecustomer;
