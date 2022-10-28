import React, { useState } from 'react';
import { styled } from '@mui/material';
import type { RadioChangeEvent } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TableComponent from '../../../components/Table';
import SelectComponent from '../../../components/Select';
import InputComponent from '../../../components/Input';
import RadioComponent from '../../../components/Input/radio';
import SpaceComponent from '../../../components/Space';
import MessageErrorComponent from '../../../components/Text/message-error';
import LabelComponent from '../../../components/Text/label';
import HorizontalLineComponent from '../../../components/Horizontal-line';
import { Layout, Col, Row, Checkbox, DatePicker, Button, Form } from 'antd';
const { Footer } = Layout;

const RadioTypeData = [
  {
    value: '1',
    title: '전체'
  },
  {
    value: '2',
    title: 'BET'
  },
  {
    value: '3',
    title: 'WIN'
  }
];

const typeTotalData = [
  {
    value: '1',
    title: '전체'
  },
  {
    value: '2',
    title: '성공'
  },
  {
    value: '3',
    title: '베팅취소'
  }
];

const whetherDetailsData = [
  {
    value: '1',
    title: '전체'
  },
  {
    value: '2',
    title: '성공'
  },
  {
    value: '3',
    title: '대기'
  }
];

const SpaceItems = styled('div')({
  paddingTop: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'center',
  fontSize: 20
});

const SpaceText = styled('span')({
  fontSize: '20px',
  fontWeight: 500
});

const SpaceItem = styled('span')({
  height: 45,
  paddingLeft: 10,
  paddingRight: 10,
  fontSize: 25
});

const SpaceDad = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});

const dataList = Array.from(new Array(10).keys());

interface IFormInputs {
  affiliated: string;
  vendor: string;
  game: string;
  endDate: string;
  startDate: string;
  transactionID: string;
  id: string;
  RadioType: string;
  typeTotal: string;
  whetherDetails: string;
}

const schema = yup
  .object({
    affiliated: yup.string().required(),
    vendor: yup.string().required(),
    game: yup.string().required(),
    endDate: yup.string().required(),
    transactionID: yup.string().required(),
    id: yup.string().required(),
    RadioType: yup.string().required(),
    typeTotal: yup.string().required(),
    whetherDetails: yup.string().required(),
    startDate: yup.string().required()
  })
  .required();
const Transactions: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  const {
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IFormInputs) => {
    setIsShow(!isShow);
    console.log(data);
  };

  return (
    <>
      <Form onFinish={(e) => handleSubmit(onSubmit)(e)}>
        <Layout>
          <div>
            <h4 className="ant-typography"> 검색 </h4>
          </div>

          <Footer>
            <Form.Item>
              <Row>
                <Col span={8}>
                  <LabelComponent message="소속 에이전트" />
                </Col>
                <Col span={16}>
                  <SelectComponent
                    style={{ width: '100%' }}
                    placeholder="선택하세요."
                    onChange={(e: string) => setValue('affiliated', e)}
                    data={dataList}
                  />
                  <MessageErrorComponent message={errors.affiliated?.message} />
                  <Checkbox>하부 에이전트 포함 검색 여부</Checkbox>
                </Col>
              </Row>
            </Form.Item>
            <HorizontalLineComponent />
            <Form.Item>
              <Row>
                <Col span={8}>
                  <LabelComponent message="벤더" />
                </Col>
                <Col span={16}>
                  <SelectComponent
                    style={{ width: '100%', height: '45px' }}
                    placeholder="선택하세요."
                    onChange={(e: string) => setValue('vendor', e)}
                    data={dataList}
                  />
                  <MessageErrorComponent message={errors.vendor?.message} />
                </Col>
              </Row>
            </Form.Item>
            <HorizontalLineComponent />
            <Form.Item>
              <Row>
                <Col span={8}>
                  <LabelComponent message="게임" />
                </Col>
                <Col span={16}>
                  <SelectComponent
                    style={{ width: '100%', height: '45px' }}
                    placeholder="선택하세요."
                    onChange={(e: string) => setValue('game', e)}
                    data={dataList}
                  />
                  <MessageErrorComponent message={errors.game?.message} />
                </Col>
              </Row>
            </Form.Item>
            <HorizontalLineComponent />
            <Form.Item>
              <Row>
                <Col span={8}>
                  <LabelComponent message="기간" />
                </Col>
                <Col span={16} className="ant-row">
                  <Row justify="space-between">
                    <Col span={11}>
                      <DatePicker
                        placeholder="시작일자"
                        style={{ width: '100%' }}
                        onBlur={(e: any) =>
                          setValue('startDate', e.target.value)
                        }
                      />
                      <MessageErrorComponent
                        message={errors.startDate?.message}
                      />
                    </Col>
                    <Col span={11}>
                      <DatePicker
                        placeholder="종료일자."
                        style={{ width: '100%' }}
                        onBlur={(e: any) => setValue('endDate', e.target.value)}
                      />
                      <MessageErrorComponent
                        message={errors.endDate?.message}
                      />
                    </Col>
                  </Row>

                  <br />
                </Col>
              </Row>
            </Form.Item>
            <HorizontalLineComponent />
            <Form.Item>
              <Row>
                <Col span={8}>
                  <LabelComponent message="트랜잭션ID" />
                </Col>
                <Col span={16}>
                  <InputComponent
                    placeholder="트랜잭션ID"
                    type="text"
                    onBlur={(e: any) =>
                      setValue('transactionID', e.target.value)
                    }
                  />
                  <MessageErrorComponent
                    message={errors.transactionID?.message}
                  />
                </Col>
              </Row>
            </Form.Item>
            <HorizontalLineComponent />
            <Form.Item>
              <Row>
                <Col span={8}>
                  <LabelComponent message="아이디" />
                </Col>
                <Col span={16}>
                  <InputComponent
                    placeholder="아이디"
                    type="text"
                    onBlur={(e: any) => setValue('id', e.target.value)}
                  />
                  <MessageErrorComponent message={errors.id?.message} />
                </Col>
              </Row>
            </Form.Item>
            <HorizontalLineComponent />
            <Form.Item>
              <Row>
                <Col span={8}>
                  <LabelComponent message="타입" />
                </Col>
                <Col span={16}>
                  <RadioComponent
                    data={RadioTypeData}
                    onChange={(e: RadioChangeEvent) => {
                      setValue('RadioType', e.target.value);
                    }}
                  />
                  <MessageErrorComponent message={errors.RadioType?.message} />
                </Col>
              </Row>
            </Form.Item>
            <HorizontalLineComponent />
            <Form.Item>
              <Row>
                <Col span={8}>
                  <LabelComponent message="타입" />
                </Col>
                <Col span={16}>
                  <RadioComponent
                    data={typeTotalData}
                    onChange={(e: RadioChangeEvent) => {
                      setValue('typeTotal', e.target.value);
                    }}
                  />
                  <MessageErrorComponent message={errors.typeTotal?.message} />
                </Col>
              </Row>
            </Form.Item>
            <HorizontalLineComponent />
            <Form.Item>
              <Row>
                <Col span={8}>
                  <LabelComponent message="상세내역 여부" />
                </Col>
                <Col span={16}>
                  <RadioComponent
                    data={whetherDetailsData}
                    onChange={(e: RadioChangeEvent) => {
                      setValue('whetherDetails', e.target.value);
                    }}
                  />
                  <MessageErrorComponent
                    message={errors.whetherDetails?.message}
                  />
                </Col>
              </Row>
            </Form.Item>
            <HorizontalLineComponent />
            <Form.Item>
              <Row>
                <Col span={24}>
                  <Button
                    htmlType="submit"
                    type="primary"
                    block
                    style={{ height: '45px' }}
                  >
                    검색
                  </Button>
                </Col>
              </Row>
            </Form.Item>
            {isShow ? (
              <Row>
                <Col span={17}>
                  <SpaceDad>
                    <SpaceComponent align="center">
                      <SpaceItems>
                        <small>베팅 금액</small>
                        <SpaceText
                          style={{ fontSize: '20px', fontWeight: 500 }}
                        >
                          0
                        </SpaceText>
                      </SpaceItems>

                      <SpaceItem>-</SpaceItem>

                      <SpaceItems>
                        <small>베팅 금액</small>
                        <SpaceText>0</SpaceText>
                      </SpaceItems>
                    </SpaceComponent>

                    <SpaceComponent align="center">
                      <SpaceItems>
                        <small>베팅 건수</small>
                        <SpaceText
                          style={{ fontSize: '20px', fontWeight: 500 }}
                        >
                          0 건
                        </SpaceText>
                      </SpaceItems>

                      <SpaceItem>+</SpaceItem>

                      <SpaceItems>
                        <small>당첨 건수</small>
                        <SpaceText>0 건</SpaceText>
                      </SpaceItems>

                      <SpaceItem>=</SpaceItem>

                      <SpaceItems>
                        <small>총 건수</small>
                        <SpaceText>0</SpaceText>
                      </SpaceItems>
                    </SpaceComponent>
                  </SpaceDad>
                </Col>
                <Col span={7}>
                  <SpaceComponent align="center" style={{ width: '100%' }}>
                    <SpaceItems style={{ width: '100%' }}>
                      <small style={{ width: '100%', textAlign: 'start' }}>
                        손익 금액
                      </small>
                      <SpaceText
                        style={{
                          fontSize: '20px',
                          fontWeight: 500,
                          width: '100%',
                          textAlign: 'end'
                        }}
                      >
                        0
                      </SpaceText>
                    </SpaceItems>
                  </SpaceComponent>
                  <SpaceComponent align="center" style={{ width: '100%' }}>
                    <SpaceItems style={{ width: '100%' }}>
                      <small style={{ width: '100%', textAlign: 'start' }}>
                        RTP
                      </small>
                      <SpaceText
                        style={{
                          fontSize: '20px',
                          fontWeight: 500,
                          width: '100%',
                          textAlign: 'end'
                        }}
                      >
                        10 %
                      </SpaceText>
                    </SpaceItems>
                  </SpaceComponent>
                </Col>
              </Row>
            ) : undefined}

            <TableComponent />
          </Footer>
        </Layout>
      </Form>
    </>
  );
};

export default Transactions;
