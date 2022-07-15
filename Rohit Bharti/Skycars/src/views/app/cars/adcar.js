import React from 'react';
import { AvGroup, AvInput, AvForm } from 'availity-reactstrap-validation';
import {
  Row,
  Card,
  CardBody,
  Input,
  // CardTitle,
  FormGroup,
  Label,
  // CustomInput,
  // FormText,
  Form,
  Button,
  InputGroup,
  InputGroupAddon,
  CustomInput
} from 'reactstrap';

import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';


const Adcar = ({ match }) => {
  // const { messages } = intl;

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.addnewcar" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <Form>
                <Row>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="exampleEmail">
                        <IntlMessages id="forms.carname" />
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="car Name"
                      />
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="passwordBasic">
                        <IntlMessages id="forms.brand" />
                      </Label>
                      <Input
                        type="password"
                        name="passwordBasic"
                        id="passwordBasic"
                        placeholder="Brand"
                      />
                    </FormGroup>
                  </Colxx>
                </Row>

                {/* 2nd row  */}
                <Row>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="exampleEmail">
                        <IntlMessages id="forms.modal" />
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Modal"
                       
                      />
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="passwordBasic">
                        <IntlMessages id="forms.Type" />
                      </Label>
                      <Input
                        type="password"
                        name="passwordBasic"
                        id="passwordBasic"
                        placeholder="type"
                      />
                    </FormGroup>
                  </Colxx>
                </Row>

                {/* 3rd row  */}
                <Row>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="exampleEmail">
                        <IntlMessages id="forms.Seatingcapacity" />
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Seating Capacity"
                      />
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="passwordBasic">
                        <IntlMessages id="forms.plateno" />
                      </Label>
                      <Input
                        type="password"
                        name="passwordBasic"
                        id="passwordBasic"
                        placeholder="Plate Number"
                        // placeholder={messages['forms.password']}
                      />
                    </FormGroup>
                  </Colxx>
                </Row>

                {/* 4th row  */}
                <Row>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="exampleEmail">
                        <IntlMessages id="forms.fueltype" />
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Fuel Type"
                      />
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="passwordBasic">
                        <IntlMessages id="forms.fuelcapacity" />
                      </Label>
                      <Input
                        type="password"
                        name="passwordBasic"
                        id="passwordBasic"
                        placeholder="Fuel Capacity"
                      />
                    </FormGroup>
                  </Colxx>
                </Row>

                {/* 5th row  */}
                <Row>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="exampleEmail">
                        <IntlMessages id="forms.year" />
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Year Of manufacturing"
                      />
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="passwordBasic">
                        <IntlMessages id="forms.colour" />
                      </Label>
                      <Input
                        type="password"
                        name="passwordBasic"
                        id="passwordBasic"
                        placeholder="Colour"
                      />
                    </FormGroup>
                  </Colxx>
                </Row>
                {/* 6th row  */}
                <Row>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="exampleEmail">
                        <IntlMessages id="forms.hcharge" />
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Hourly Charge"
                      />
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="passwordBasic">
                        <IntlMessages id="forms.dcharge" />
                      </Label>
                      <Input
                        type="password"
                        name="passwordBasic"
                        id="passwordBasic"
                        placeholder="Daily Charge"
                      />
                    </FormGroup>
                  </Colxx>
                </Row>

                {/* 7th row  */}
                <Row>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="exampleEmail">
                        <IntlMessages id="forms.wcharge" />
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Weakly Charge"
                      />
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="passwordBasic">
                        <IntlMessages id="forms.mcharge" />
                      </Label>
                      <Input
                        type="password"
                        name="passwordBasic"
                        id="passwordBasic"
                        placeholder="Monthly Charge"
                      />
                    </FormGroup>
                  </Colxx>
                </Row>

                {/* 8th row  */}
                <Row>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="exampleEmail">
                        <IntlMessages id="forms.icharge" />
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Insurance Charge Per Day"
                      />
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="6">
                  <AvForm>
                    <AvGroup>
                      <Label>Details</Label>
                      <AvInput
                        type="textarea"
                        name="details"
                        id="details"
                        required  
                        placeholder="Details"
                      />
                      
                    </AvGroup>
                    </AvForm>
                  </Colxx>
                </Row>

                {/* 9th row  */}
                <Row>
                  <Colxx xxs="6">
                    <FormGroup>
                      <Label for="exampleEmail">
                        <IntlMessages id="forms.branch" />
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Branch"
                      />
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="6">
                  <Label for="exampleEmail">
                        <IntlMessages id="forms.front-view-upload" />
                      </Label>
                  <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
                <CustomInput
                  type="file"
                  id="exampleCustomFileBrowser1"
                  name="customFile"
                  
                />
              </InputGroup>
                  </Colxx>
                </Row>

                {/* 10th row  */}
                <Row>
                  <Colxx xxs="6">
                  <Label for="exampleEmail">
                        <IntlMessages id="forms.rear-view-upload" />
                      </Label>
                  <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
                <CustomInput
                  type="file"
                  id="exampleCustomFileBrowser1"
                  name="customFile"
                />
              </InputGroup>
                  </Colxx>
                  <Colxx xxs="6">
                  <Label for="exampleEmail">
                        <IntlMessages id="forms.left-side-view-upload" />
                      </Label>
                  <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
                <CustomInput
                  type="file"
                  id="exampleCustomFileBrowser1"
                  name="customFile"
                />
              </InputGroup>
                  </Colxx>
                </Row>

                {/* 11th row  */}
                <Row>
                  <Colxx xxs="6">
                  <Label for="exampleEmail">
                        <IntlMessages id="forms.right-view-upload" />
                      </Label>
                  <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
                <CustomInput
                  type="file"
                  id="exampleCustomFileBrowser1"
                  name="customFile"
                />
              </InputGroup>
                  </Colxx>
                  <Colxx xxs="6">
                  <Label for="exampleEmail">
                        <IntlMessages id="forms.interior-view-upload" />
                      </Label>
                  <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
                <CustomInput
                  type="file"
                  id="exampleCustomFileBrowser1"
                  name="customFile"
                />
              </InputGroup>
                  </Colxx>
                </Row>

                {/* <FormText color="muted">
                    <IntlMessages id="forms.email-muted" />
                  </FormText> */}

                <FormGroup>
                  {/* <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox"
                    label="Check this custom checkbox"
                  /> */}
                </FormGroup>

                <Button color="primary" className="mt-4">
                  <IntlMessages id="forms.submit" />
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default Adcar;
