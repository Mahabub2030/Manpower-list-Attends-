// $(document).ready(function() {

//     var table = $('#example').DataTable({

//         buttons:['copy', 'csv', 'excel', 'pdf', 'print', 'add', 'remove']
//     });

//     table.buttons().container()
//     .appendTo('#example_wrapper .col-md-6:eq(0)');
// });


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

  
    


