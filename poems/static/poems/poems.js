let rhy_seq
let rhy_seq_uniq
let rhy_seq_list


function unique_char(str1) {
   var str=str1;
   var uniql="";
   for (var x=0;x < str.length;x++) {
       if(uniql.indexOf(str.charAt(x))==-1) {
           uniql += str[x];
       }
   }
    return uniql;
}


$('#id_select_verses').on("change", function(){
   if ( $(this).val() === 'yes'){

      // TODO Empty first https://stackoverflow.com/questions/1801499/how-to-change-options-of-select-with-jquery

      rhy_seq = $("#id_rhy_seq").val()
      rhy_seq_uniq = unique_char(rhy_seq).split('').sort()
      rhy_list = rhy_seq_uniq.join('').trim().split('')

      var $el = $("#hidden_fieldset")
      for (i = 0; i < rhy_list.length; i++) {
         $el.append($("<label>").attr("for", rhy_list[i]).text(`Rima ${rhy_list[i]}:`));
         $el.append($("<br>"));
         $el.append($("<input type='text'>").attr("name", rhy_list[i]).attr("id", rhy_list[i]).attr("required", "required"));
         $el.append($("<br>"));
      };

      $('#hidden').show();

   } else {
     $('#hidden').hide();
   }
});


if ( $("#id_select_verses").val() === "yes" ) {

}