import React from 'react'
import "./Trademark.css";
import {COMMON_PROJECTS} from "../fakeData/COMMON-PROJECTS";
import {DOLCE_GABBANA} from "../fakeData/DOLCE-GABBANA";
import {NEW_BALANCE} from "../fakeData/NEW-BALANCE";
import {NIKE} from "../fakeData/NIKE";
import {THOM_BROWNE} from "../fakeData/THOM-BROWNE";
import {TOGA_PULLA} from "../fakeData/TOGA-PULLA";
import {VALENTINO} from "../fakeData/VALENTINO";
import TrademarkProduct from './TrademarkProduct';
export default function Trademark() {
    return (
        <>
        <div className="dir-current-page-bar">
            <div className="cart-title">
            <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 220.319 220.319" xmlSpace="preserve" className="icon"><path d="M110.16,0C49.417,0,0,49.417,0,110.16s49.417,110.159,110.16,110.159s110.16-49.417,110.16-110.159S170.902,0,110.16,0z  M110.16,190.001c-44.024,0-79.84-35.816-79.84-79.841s35.816-79.841,79.84-79.841S190,66.135,190,110.16 S154.184,190.001,110.16,190.001z M150.19,95.832c0-22.237-15.607-36.052-40.73-36.052H72.24v100.76h21.34v-28.073h15.881 c0.936,0,1.925-0.024,2.943-0.074l20.535,28.148h26.446l-25.034-34.301C144.571,119.86,150.19,109.084,150.19,95.832z  M109.46,111.128H93.58V81.12h15.881c19.391,0,19.391,11.072,19.391,14.712C128.852,99.614,128.852,111.128,109.46,111.128z" /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                <h1>Trademark </h1>
            </div>
        </div>
        <div className="fluid-container">
            <div className="row">
                <div className="col-xl-1 col-lg-1"></div>
                <div className="col-xl-10 col-lg-10">
                    <div className="row">
                        <TrademarkProduct product = {COMMON_PROJECTS} name = {"COMMON PROJECTS"}/>
                        <TrademarkProduct product = {DOLCE_GABBANA} name = {"DOLCE GABBANA"}/>
                        <TrademarkProduct product = {NEW_BALANCE} name = {"NEW BALANCE"}/>
                        <TrademarkProduct product = {NIKE} name = {"NIKE"}/>
                        <TrademarkProduct product = {TOGA_PULLA} name = {"TOGA PULLA"}/>
                        <TrademarkProduct product = {THOM_BROWNE} name = {"THOM BROWNE"}/>
                        <TrademarkProduct product = {VALENTINO} name = {"VALENTINO"}/>
                    </div>
                </div>
                
                <div className="col-xl-1 col-lg-1"></div>
            </div>
        </div>
        </>
    )
}
