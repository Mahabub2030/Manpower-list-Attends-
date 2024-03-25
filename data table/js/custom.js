// $(document).ready(function() {

//     var table = $('#example').DataTable({

//         buttons:['copy', 'csv', 'excel', 'pdf', 'print', 'add', 'remove']
//     });

//     table.buttons().container()
//     .appendTo('#example_wrapper .col-md-6:eq(0)');
// });

// final code below

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
//                     doc.textCenter;
//                     doc.defaultStyle.fontSize = 13;
                    
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






// 


//  secode final code for manpower

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
                    doc.defaultStyle.fontSize = 11;
                    // doc.styles.tableBody.border = '1px solid #000'; // Add table borders

                    // Apply text-center class to 9th and 10th columns in PDF
                    doc.content[1].table.body.forEach(function(row) {
                        row[8].alignment = 'center'; // 9th column alignment
                        row[9].alignment = 'center'; // 10th column alignment
                        // doc.styles.tableBody.border = '1px solid #000'; // Add table borders
                    });
                }
            }, 
            'print', 
            'add', 
            'remove'
        ]
    });

    // Apply text-center class to 9th and 10th columns
    table.column(8).nodes().to$().addClass('text-center');
    table.column(9).nodes().to$().addClass('text-center');

    table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
});




// 




  
    


