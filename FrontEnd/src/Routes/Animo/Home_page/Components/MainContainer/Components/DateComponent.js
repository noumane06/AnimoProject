import React from 'react';
function Datecomponent(props) {

      var MonthId = props.Title ; 
      var MonthName = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"] ;
      
      if ( typeof(MonthId) === 'object' ) {
        var dateDay = props.Title.getDate();
        MonthId = dateDay+" " + MonthName[MonthId.getMonth()];
      }
  
      return ( 
        <div>
             <h2 className="time">
                {MonthId}
             </h2>
        </div>
       );
}

export default Datecomponent;  