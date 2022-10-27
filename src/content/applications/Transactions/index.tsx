import React, { useState } from 'react';
import { styled } from '@mui/material';
import type { RadioChangeEvent } from 'antd';
import {
  Layout,
  Col,
  Row,
  Input,
  Select,
  Checkbox,
  DatePicker,
  Radio,
  Button,
  Space,
  Table
} from 'antd';
const { Footer } = Layout;
const { Option } = Select;

const TransactionsInput = styled(Input)({});

const HorizontalLine = styled('div')({
  marginTop: '.9375rem',
  marginBottom: '.9375rem',
  borderBottomStyle: 'ridge'
});

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

const SpaceStyled = styled(Space)({
  alignItems: 'flex-end'
});

const SpaceDad = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});

const children: React.ReactNode[] = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const Transactions: React.FC = () => {
  const [value, setValue] = useState(1);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  const [isShow, setIsShow] = useState(false);

  const columns = [
    {
      title: '트랜잭션ID',
      dataIndex: 'stt1',
      sorter: {
        compare: (a: any, b: any) => a.stt1 - b.stt1,
        multiple: 4
      }
    },
    {
      title: '소속 에이전트',
      dataIndex: 'stt2'
    },
    {
      title: '유저',
      dataIndex: 'stt3'
    },
    {
      title: '타입',
      dataIndex: 'stt4',
      sorter: {
        compare: (a: any, b: any) => a.stt4 - b.stt4,
        multiple: 3
      }
    },
    {
      title: '상태',
      dataIndex: 'stt5',
      sorter: {
        compare: (a: any, b: any) => a.stt5 - b.stt5,
        multiple: 2
      }
    },
    {
      title: '벤더',
      dataIndex: 'stt6',
      sorter: {
        compare: (a: any, b: any) => a.stt6 - b.stt6,
        multiple: 1
      }
    },
    {
      title: '게임',
      dataIndex: 'stt7'
    },
    {
      title: '처리금액',
      dataIndex: 'stt9'
    },
    {
      title: '이전금액',
      dataIndex: 'stt10'
    },
    {
      title: '처리일',
      dataIndex: 'stt11'
    }
  ];

  const data = Array.from(Array(1000).keys()).map((e) => {
    return {
      key: e + 1,
      stt1: Math.floor(Math.random() * 100) + 100000,
      stt2: 'Not Name' + (e + 100),
      stt3: 'Not Name' + (e + 100),
      stt4: Math.floor(Math.random() * 10000) + 100000,
      stt5: Math.floor(Math.random() * 10000) + 100000,
      stt6: Math.floor(Math.random() * 10000) + 100000,
      stt7: 'Not Name' + (e + 100),
      stt8: 'Not Name' + (e + 100),
      stt9: 'Not Name' + (e + 100),
      stt10: 'Not Name' + (e + 100),
      stt11: 'Not Name' + e
    };
  });

  return (
    <>
      <Layout>
        <div>
          <h4 className="ant-typography"> 검색 </h4>
        </div>

        <Footer>
          <Row>
            <Col span={8}>
              <label>소속 에이전트</label>
            </Col>
            <Col span={16}>
              <Select style={{ width: '100%' }} placeholder="선택하세요.">
                {children}
              </Select>
              <Checkbox>하부 에이전트 포함 검색 여부</Checkbox>
            </Col>
          </Row>
          <HorizontalLine />
          <Row>
            <Col span={8}>
              <label>벤더</label>
            </Col>
            <Col span={16}>
              <Select
                style={{ width: '100%', height: '45px' }}
                placeholder="선택하세요."
              >
                {children}
              </Select>
            </Col>
          </Row>
          <HorizontalLine />
          <Row>
            <Col span={8}>
              <label>게임</label>
            </Col>
            <Col span={16}>
              <Select
                style={{ width: '100%', height: '45px' }}
                placeholder="선택하세요."
              >
                {children}
              </Select>
            </Col>
          </Row>
          <HorizontalLine />
          <Row>
            <Col span={8}>
              <label>기간</label>
            </Col>
            <Col span={16} className="ant-row">
              <Row justify="space-between">
                <Col span={11}>
                  <DatePicker
                    placeholder="시작일자"
                    style={{ width: '100%' }}
                  />
                </Col>
                <Col span={11}>
                  <DatePicker
                    placeholder="종료일자."
                    style={{ width: '100%' }}
                  />
                </Col>
              </Row>

              <br />
            </Col>
          </Row>

          <HorizontalLine />
          <Row>
            <Col span={8}>
              <label>트랜잭션ID</label>
            </Col>
            <Col span={16}>
              <TransactionsInput placeholder="트랜잭션ID" type="text" />
            </Col>
          </Row>
          <HorizontalLine />
          <Row>
            <Col span={8}>
              <label>아이디</label>
            </Col>
            <Col span={16}>
              <TransactionsInput placeholder="아이디" type="text" />
            </Col>
          </Row>
          <HorizontalLine />
          <Row>
            <Col span={8}>
              <label>타입</label>
            </Col>
            <Col span={16}>
              <Radio.Group
                onChange={(e: RadioChangeEvent) => {
                  console.log('radio checked', e.target.value);
                  setValue(e.target.value);
                }}
                value={value}
              >
                <Radio value={1}>전체</Radio>
                <Radio value={2}>BET</Radio>
                <Radio value={3}>WIN</Radio>
              </Radio.Group>
            </Col>
          </Row>
          <HorizontalLine />
          <Row>
            <Col span={8}>
              <label>타입</label>
            </Col>
            <Col span={16}>
              <Radio.Group
                onChange={(e: RadioChangeEvent) => {
                  console.log('radio checked', e.target.value);
                  setValue1(e.target.value);
                }}
                value={value1}
              >
                <Radio value={1}>전체</Radio>
                <Radio value={2}>성공</Radio>
                <Radio value={3}>베팅취소</Radio>
              </Radio.Group>
            </Col>
          </Row>
          <HorizontalLine />
          <Row>
            <Col span={8}>
              <label>상세내역 여부</label>
            </Col>
            <Col span={16}>
              <Radio.Group
                onChange={(e: RadioChangeEvent) => {
                  console.log('radio checked', e.target.value);
                  setValue2(e.target.value);
                }}
                value={value2}
              >
                <Radio value={1}>전체</Radio>
                <Radio value={2}>성공</Radio>
                <Radio value={3}>대기</Radio>
              </Radio.Group>
            </Col>
          </Row>
          <HorizontalLine />
          <Row>
            <Col span={24}>
              <Button
                type="primary"
                block
                style={{ height: '45px' }}
                onClick={() => {
                  setIsShow(!isShow);
                }}
              >
                검색
              </Button>
            </Col>
          </Row>
          {isShow ? (
            <Row>
              <Col span={17}>
                <SpaceDad>
                  <SpaceStyled align="center">
                    <SpaceItems>
                      <small>베팅 금액</small>
                      <SpaceText style={{ fontSize: '20px', fontWeight: 500 }}>
                        0
                      </SpaceText>
                    </SpaceItems>

                    <SpaceItem>-</SpaceItem>

                    <SpaceItems>
                      <small>베팅 금액</small>
                      <SpaceText>0</SpaceText>
                    </SpaceItems>
                  </SpaceStyled>

                  <SpaceStyled align="center">
                    <SpaceItems>
                      <small>베팅 건수</small>
                      <SpaceText style={{ fontSize: '20px', fontWeight: 500 }}>
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
                  </SpaceStyled>
                </SpaceDad>
              </Col>
              <Col span={7}>
                <SpaceStyled align="center" style={{ width: '100%' }}>
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
                </SpaceStyled>
                <SpaceStyled align="center" style={{ width: '100%' }}>
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
                </SpaceStyled>
              </Col>
            </Row>
          ) : undefined}
          <Table
            style={{ paddingTop: '40px' }}
            columns={columns}
            dataSource={data}
          />
        </Footer>
      </Layout>
    </>
  );
};

export default Transactions;
