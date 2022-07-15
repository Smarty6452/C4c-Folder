import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import Managetranscation from './managetranscation-table'


const transcation = ({match}) => {
  return (
    <>
 <Row>
        <Colxx xxs="12">
            
          <Breadcrumb heading="menu.transcation" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Managetranscation/>
        </Colxx>
      </Row>
   
    </>
  );
};
export default  transcation;
