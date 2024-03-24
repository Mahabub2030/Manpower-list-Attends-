// $(document).ready(function() {

//     var table = $('#example').DataTable({

//         buttons:['copy', 'csv', 'excel', 'pdf', 'print', 'add', 'remove']
//     });

//     table.buttons().container()
//     .appendTo('#example_wrapper .col-md-6:eq(0)');
// });

// final code below

$(document).ready(function() {

    var table = $('#example').DataTable({

        buttons: [
            'copy', 
            'csv', 
            'excel', 
            {
                extend: 'pdf',
                customize: function (doc) {
                    // Change page size and orientation to A3
                    doc.pageOrientation = 'landscape';
                    doc.pageSize = 'A3';
                }
            }, 
            'print', 
            'add', 
            'remove'
        ]
    });

    table.buttons().container()
    .appendTo('#example_wrapper .col-md-6:eq(0)');
    
});







// $(document).ready(function() {
//     var table = $('#example').DataTable({
//         buttons: [
//             'copy', 
//             'csv', 
//             'excel', 
//             {
//                 extend: 'pdf',
//                 customize: function (doc) {
//                     // Change page size and orientation to A3
//                     doc.pageOrientation = 'landscape';
//                     doc.pageSize = 'A3';
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     // Set text alignment to center and font size to 1rem
//     $('#example_wrapper .col-md-6:eq(0) .dt-buttons').css({
       
//     });
// });




















// $(document).ready(function() {

//     var table = $('#example').DataTable({

//         buttons: [
//             'copy', 
//             'csv', 
//             'excel', 
//             {
//                 extend: 'pdf',
//                 customize: function (doc) {
//                     // Change page size and orientation to A3
//                     doc.pageOrientation = 'landscape';
//                     doc.pageSize = 'A3';
                    
//                     // Center-align text
//                     var tableBody = doc.content[1];
//                     tableBody.alignment = 'center';
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     table.buttons().container()
//     .appendTo('#example_wrapper .col-md-6:eq(0)');
// });


// $(document).ready(function() {

//     var table = $('#example').DataTable({

//         buttons: [
//             'copy', 
//             'csv', 
//             'excel', 
//             {
//                 extend: 'pdf',
//                 customize: function (doc) {
//                     // Change page size and orientation to A3
//                     doc.pageOrientation = 'landscape';
//                     doc.pageSize = 'A3';
                    
//                     // Center-align text
//                     var tableBody = doc.content[1];
//                     tableBody.alignment = 'center';
                    
//                     // Set margins to 0
//                     doc.pageMargins = [0.5, 0, 0, 0.5];
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     table.buttons().container()
//     .appendTo('#example_wrapper .col-md-6:eq(0)');
// });

// $(document).ready(function() {
//     var table = $('#example').DataTable({
//         buttons: [
//             'copy', 
//             'pdf', 
//             'excel', 
//             {
//                 extend: 'pdf',
//                 customize: function (doc) {
//                     // Change page size and orientation to A3
//                     doc.pageOrientation = 'landscape';
//                     doc.pageSize = 'A3';
                    
//                     // Center-align text
//                     var tableBody = doc.content[1];
//                     tableBody.alignment = 'center';
                    
//                     // Adjust content width and height to simulate negative margins
//                     var contentWidth = doc.page.width - doc.pageMargins[0] * 2;
//                     var contentHeight = doc.page.height - doc.pageMargins[1] * 2;
//                     doc.content[1].width = contentWidth;
//                     doc.content[1].height = contentHeight;
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     table.buttons().container()
//     .appendTo('#example_wrapper .col-md-6:eq(0)');
// });



// $(document).ready(function() {

//     var table = $('#example').DataTable({

//         buttons: [
//             'copy', 
//             'csv', 
//             'excel', 
//             {
//                 extend: 'pdf',
//                 customize: function (doc) {
//                     // Change page size and orientation to A3
//                     doc.pageOrientation = 'landscape';
//                     doc.pageSize = 'A3';
                    
//                     // Center-align text
//                     var tableBody = doc.content[1];
//                     tableBody.alignment = 'center';
                    
//                     // Set margins to 0
//                     doc.pageMargins = [0, 0, 0, 0];
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     table.buttons().container()
//     .appendTo('#example_wrapper .col-md-6:eq(0)');

//     // Center the content on the page when printing
//     $('#example_wrapper').css('display', 'flex');
//     $('#example_wrapper .col-md-6:eq(0)').css('margin', 'auto');
// });





  
    


