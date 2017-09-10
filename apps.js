/* eslint-env jquery*/ 
$(document).ready(function (){
    $("#guidelines").accordion();

    $( function() {
        var availableTags = [
            "Anxiety",
            "Asthma",
            "Cihan",
            "Cough",
            "COPD",
            "Depression",
            "Ear wax removal",
            "FIT Positive",
            "Frank",
            "Gonorrhea",
            "Hemoglobinopathy",
            "Immune Deficiency",
            "Juvenile Arthritis",
            "Kwashiokor",
            "Lupus",
            "Mammogram",
            "Mustafa",
            "Omer",
            "Pap",
            "Rheumatoid Arthritis",
            "SLE",
            "Tirna",
            "Tonsilitis",
            "Uvuloplasty",
            "Ventral Hernia",
            "Yavuz"
        ];
        $( "#tags" ).autocomplete({
            source: availableTags
        });
    });

    $( function() {
        $( "input" ).checkboxradio();
    } );
    
    $( function() {
        $( "#tabs" ).tabs();
    } );

});