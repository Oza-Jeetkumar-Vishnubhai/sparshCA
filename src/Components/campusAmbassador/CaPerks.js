import React from 'react'
import letter from "./assets/LETTER.png"
import pronites from "./assets/PRONITES.png"
import certificates from "./assets/CERTIFICATES.png"
import networking from "./assets/NETWORKING.png"
import merchandies from "./assets/MERCHANDIES.png"
import management from "./assets/MANAGEMENT.png"

const CaPerks = () => {
  return (
    <div class="perks">
        <div class="heading">
            PERKS
        </div>
        <div class="grid">
            <div class="box">
                <div class="img"><img src={letter}/></div>
                <div class="title">LETTER OF
                    RECOMMENDATION</div>
            </div>
            <div class="box">
                <div class="img"><img src={pronites}/></div>
                <div class="title">FREE PRONITES PASS</div>
            </div>
            <div class="box">
                <div class="img"><img src={certificates}/></div>
                <div class="title">CERTIFICATES</div>
            </div>
            <div class="box">
                <div class="img"><img src={networking}/></div>
                <div class="title">NETWORKING</div>
            </div>
            <div class="box">
                <div class="img"><img src={merchandies}/></div>
                <div class="title">MERCHANDIES & GOODIES</div>
            </div>
            <div class="box">
                <div class="img"><img src={management}/></div>
                <div class="title">MANAGEMENT SKILLS</div>
            </div>
        </div>
    </div>
  )
}

export default CaPerks
