import React from "react";
import './Lside.css'

export default function lefttSide() {
    return (
        <div>
            <div className="text">
                <h1 className="h1"><span>Սովորի՛ր</span> ծրագրավորում</h1>
                <h1><span>Դարձի՛ր</span> պահանջված մասնագետ</h1>
                <p className="info">Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։</p>
            </div>
            <div className="btns">
                <div className="div1">
                    Սկսել ուսումը
                </div>
                <div className="div2">
                    <i class="fa-regular fa-circle-play"></i> Տեսանյութ
                </div>
            </div>
            <div className="logos">
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
    )
}