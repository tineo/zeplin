/*<div className="row pt-3">
<div className="col">
    <h6 className="ml-5 pl-3  py-1"><span className=" font-weight-bold">Tengo</span> - Venta: <span>3.50</span></h6>
</div>
</div>
<div className="row ">
<div className="col-6">
    
    <input type="number" className="d-block" value={ this.state.upValue } />
    
    <div className="btn btn-secondary" id="btn-change" >
        <img src="static/img/ico-change.svg" className="" />
      </div>
    <h6 className="ml-5 pl-3 py-1 font-weight-bold">
        <span className=" font-weight-bold">Quiero</span></h6>
    
    <input type="number"  className="d-block" value={ this.state.downValue } />

    
    
</div>

<div className="col-md-6 my-auto saving">
    <div className="py-md-5 py-4">
        <b>Ahorras S/ { this.state.saving }</b>
        <br className="d-none d-md-block"/>en ésta operación
    </div>
</div>
</div>

<div className="row">
  <div className="col-md-6">
      <h6 className="d-none d-xs-block py-3 d-none d-md-block">¿Quieres terminar la transacción?</h6>
      <a className="btn btn-block btn-lg bg-blue w-100 fs-20 font-weight-bold">
          INICIA TU OPERACIÓN
      </a>
  </div>
</div>
*/
import React, { Fragment, useState } from "react";
import { useQuery } from '@apollo/react-hooks';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { createClient } from "../util/apollo";
const client = createClient();


const GET_RATE = gql`
    {
        getLastRate{
        buying,
        selling,
        day,
        name
        }
    }
`;
function useInput({ type /*...*/ }) {
  const [value, setValue] = useState("");
  const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
  return [value, input];
}
/*
constructor(props) {
        super(props);
        this.state = {
            upCurrency : "PEN",
            downCurrency : "USD",
            upValue : 1000,
            downValue : 3500,
            rateBuying : 3.5,
            rateSelling : 3.5,
            saving: 0
        };

        

    }
*/
  function Calculadora () { 
    

    const [username, userInput] = useInput({ type: "text" });
    const [password, passwordInput] = useInput({ type: "text" });

    const USD = "$";
    const PEN = "S/";
    
    const [rateBuying, setRateBuying] = useState(0);
    const [rateSelling, setRateSelling] = useState(0);
    const [curRate, setCurRate] = useState(0);

    const [upCurrency, setUpCurrency] = useState("S/");
    const [downCurrency, setDownCurrency] = useState("$");

    const [upValue, setUpValue] = useState(0);
    const [downValue, setDownValue] = useState(0);

    const [saving, setSaving] = useState(0);
    const [typeInput, setTypeInput] = useState("text");
    const [typeChange, setTypeChange] = useState("S"); // S : Sell, B : Buying

    client
        .query({ query: GET_RATE })
        .then(result =>  {
          setRateBuying(result.data.getLastRate.buying); 
          setRateSelling(result.data.getLastRate.selling); 
          //(typeChange=="S")?setDownValue((upValue/rateSelling).toFixed(2)):setDownValue((upValue*rateBuying).toFixed(2));
        });

        return (
      <Fragment>
        <div className="row pt-3">
          <div className="col">
        <h6 className="ml-5 pl-3  py-1">
          <span className=" font-weight-bold"> Tengo {typeChange}</span> 
          - {typeChange=="S"?"Venta":"Compra"}: 
          <span>{typeChange=="S"?rateSelling:rateBuying}</span></h6>
          </div>
          </div>
          <div className="row ">
          <div className="col-md-6">
              
              <input type={typeInput} className="d-block  w-100" 
              value={ upCurrency + upValue }
              onChange={
                evt => { 
                  setUpValue(evt.target.value);
                  //if(evt.target.value == "")  setUpValue(0.00);
                  (typeChange=="S")?setDownValue((evt.target.value/rateSelling).toFixed(2)):setDownValue((evt.target.value*rateBuying).toFixed(2));
                }
              }
              onFocus={() => { setUpCurrency(""); setDownCurrency(""); setTypeInput("number");}}
              onBlur={() => { setTypeInput("text"); setUpCurrency((typeChange=="S")?PEN:USD); setDownCurrency((typeChange=="S")?USD:PEN);}}
               />
              
              <div className="btn btn-secondary" id="btn-change" 
              onClick={() => {
                if((typeChange=="S")){
                  setTypeChange("B");setUpCurrency(USD);setDownCurrency(PEN);
                }else{
                  setTypeChange("S");setUpCurrency(PEN);setDownCurrency(USD);
                }
                (typeChange=="S")?setDownValue((upValue*rateSelling).toFixed(2)):setDownValue((upValue/rateBuying).toFixed(2));
              } } >
                  <img src="static/img/ico-change.svg" className="" />
                </div>
              <h6 className="ml-5 pl-3 py-1 font-weight-bold">
                  <span className=" font-weight-bold">Quiero</span></h6>
              
              <input type={typeInput}  className="d-block w-100" value={ downCurrency + downValue }
              
                onChange={
                  evt => {
                    setDownValue(evt.target.value);
                    //if(evt.target.value == "")  setDownValue(0.00);
                    (typeChange=="S")?setUpValue((evt.target.value*rateSelling).toFixed(2)):setUpValue((evt.target.value/rateBuying).toFixed(2));
                  }
                }
                onFocus={() => { setUpCurrency(""); setDownCurrency(""); setTypeInput("number");}}
                onBlur={() => { setTypeInput("text"); setUpCurrency((typeChange=="S")?PEN:USD); setDownCurrency((typeChange=="S")?USD:PEN);}}
              />
              
          </div>

          <div className="col-md-6 my-auto saving">
              <div className="py-md-5 py-4">
                  <b>Ahorras S/ { saving }</b>
                  <br className="d-none d-md-block"/>en ésta operación
              </div>
          </div>
          </div>

          <div className="row">
            <div className="col-md-6">
                <h6 className="d-none d-xs-block py-3 d-none d-md-block">¿Quieres terminar la transacción?</h6>
                <a className="btn btn-block btn-lg bg-blue w-100 fs-20 font-weight-bold">
                    INICIA TU OPERACIÓN
                </a>
            </div>
          </div>
      </Fragment>
    );
  
};

  export default  Calculadora;