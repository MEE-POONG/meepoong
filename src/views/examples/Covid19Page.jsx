import React, { useState, useEffect } from "react";
import {
    Container,
    Row,
    Col,
} from "reactstrap";
function Covid19Page() {
    const [todayCovid, setTodayCovid] = useState({
        Confirmed: 736522,
        Deaths: 6066,
        DevBy: "https://www.kidkarnmai.com/",
        Hospitalized: 213444,
        NewConfirmed: 21838,
        NewDeaths: 212,
        NewHospitalized: 518,
        NewRecovered: 21108,
        Recovered: 517012,
        UpdateDate: "07/08/2021 13:14"
    })
    useEffect(() => {
        fetch("https://covid19.th-stat.com/json/covid19v2/getTodayCases.json").then(e => e.json()).then(e => {
            setTodayCovid(e)
        })
    }, [])
    function currencyFormat(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div className="section section-dark-covid19">
            <Container className="py-5">
                <Col xs={12} className="text-center pb-5">
                    <div class="block-title-page d-md-block d-lg-block d-xs-none d-sm-none d-none">
                        <h1>รายงานสถานการณ์ <span Style="white-space: nowrap;">โควิด-19</span></h1>
                        <h2>อัพเดทข้อมูลล่าสุด : {todayCovid.UpdateDate}</h2>
                    </div>
                </Col>
                <Row>
                    <Col xs={12} className="pt-5">
                        <div class="block-title-page d-md-none d-lg-none d-xs-block d-sm-block" Style="padding:10px">
                            <h1>รายงานสถานการณ์ <span Style="white-space: nowrap;">โควิด-19</span></h1>
                            <h2>อัพเดทข้อมูลล่าสุด : {todayCovid.UpdateDate}</h2>
                        </div>
                        <div class="block-st-all">
                            <Row>
                                <Col md={12} class="col-xs-12 col-sm-12">
                                    <div class="card-default">
                                        <p>ติดเชื้อสะสม</p>
                                        <h1 Style="line-height: inherit;">{currencyFormat(todayCovid.Confirmed)}</h1>
                                        <span>
                                            (+ {currencyFormat(todayCovid.NewConfirmed)})
                                        </span>
                                    </div>
                                </Col>
                                <Col md={4} class="col-xs-4 col-sm-4">
                                    <div class="card-default">
                                        <p>หายแล้ว</p>
                                        <h1>{currencyFormat(todayCovid.Recovered)}</h1>
                                        <span>
                                            (+ {currencyFormat(todayCovid.NewRecovered)})
                                        </span>
                                    </div>
                                </Col>
                                <Col md={4} class="col-xs-4 col-sm-4">
                                    <div class="card-default">
                                        <p>รักษาอยู่ใน รพ.</p>
                                        <h1>{currencyFormat(todayCovid.Hospitalized)}</h1>
                                        <span>&nbsp;</span>
                                    </div>
                                </Col>
                                <Col md={4} class="col-xs-4 col-sm-4">
                                    <div class="card-default">
                                        <p>เสียชีวิต</p>
                                        <h1>{currencyFormat(todayCovid.Deaths)}</h1>
                                        <span>
                                            (+ {currencyFormat(todayCovid.NewDeaths)})
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );

}

export default Covid19Page;
