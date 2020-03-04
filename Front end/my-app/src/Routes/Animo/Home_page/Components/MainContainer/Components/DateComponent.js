import React from 'react';
function Datecomponent(props) {

      var MonthId = props.Title ; 
      var MonthName = ["January","February","March","April","May","June","July","August","September","October","November","December"] ;
      
      if ( typeof(MonthId) === 'object' ) {
        var dateDay = props.Title.getDate();
        MonthId = MonthName[MonthId.getMonth()] + ' ' + dateDay + "th";
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