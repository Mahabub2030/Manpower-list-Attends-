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
//                     doc.defaultStyle.fontSize =14;
                   

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                         // doc.styles.tableBody.border = '1px solid #000'; // Add table borders
//                     });
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });
//  Final Code Add here

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
//                     doc.defaultStyle.fontSize = 11;

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });

//                     // Increase font size for header
//                     doc.content[1].table.headerRows = 1; // Make sure header is only shown once
//                     doc.styles.tableHeader.fontSize = 14; // Set font size for header
//                     doc.styles.tableHeader.alignment = 'center'
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
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
//                     doc.defaultStyle.fontSize = 11;

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });

//                     // Increase font size for header
//                     doc.content[1].table.headerRows = 1; // Make sure header is only shown once
//                     doc.styles.tableHeader.fontSize = 14; // Set font size for header
//                     doc.styles.tableHeader.alignment = 'center'
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     // Update month automatically
//     var currentDate = new Date();
//     var currentMonth = currentDate.getMonth() + 1; // January is 0

//     if (currentMonth === 4) {
//         // Update the month name for all rows
//         table.column(6).nodes().to$().text('April');
//     }

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });

// final Code 


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
//                     doc.defaultStyle.fontSize = 11;

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });

//                     // Increase font size for header
//                     doc.content[1].table.headerRows = 1; // Make sure header is only shown once
//                     doc.styles.tableHeader.fontSize = 14; // Set font size for header
//                     doc.styles.tableHeader.alignment = 'center'
//                 }
//             }, 
//             'print', 
//             {
//                 text: 'Change Month',
//                 action: function(e, dt, node, config) {
//                     var selectedMonth = prompt("Enter the month (e.g., January, February, etc.):");
//                     if (selectedMonth) {
//                         // Update the month name for all rows
//                         table.column(6).nodes().to$().text(selectedMonth);
//                     }
//                 }
//             },
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     // Update month automatically
//     var currentDate = new Date();
//     var currentMonth = currentDate.getMonth() + 1; // January is 0

//     if (currentMonth === 4) {
//         // Update the month name for all rows
//         table.column(6).nodes().to$().text('April');
//     }

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
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
//                     doc.defaultStyle.fontSize = 11;

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });

//                     // Increase font size for header
//                     doc.content[1].table.headerRows = 2; // Make sure header is only shown once
//                     doc.styles.tableHeader.fontSize = 14; // Set font size for header
//                     doc.styles.tableHeader.alignment = 'center';

//                     // Get the updated month name from the table
//                     var updatedMonth = $('#example tbody tr:first-child td:nth-child(7)').text();

//                     // Update month name in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[6].text = updatedMonth;
//                     });
//                 }
//             }, 
//             'print', 
//             {
//                 text: 'Change Month',
//                 action: function(e, dt, node, config) {
//                     var selectedMonth = prompt("Enter the month (e.g., January, February, etc.):");
//                     if (selectedMonth) {
//                         // Update the month name for all rows
//                         table.column(6).nodes().to$().text(selectedMonth);
//                         // Redraw the DataTable to reflect the changes
//                         table.draw();
//                     }
//                 }
//             },
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     // Update month automatically
//     var currentDate = new Date();
//     var currentMonth = currentDate.getMonth() + 2; // January is 0

//     if (currentMonth === 4) {
//         // Update the month name for all rows
//         table.column(6).nodes().to$().text('April');
//     }

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
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
//                     doc.defaultStyle.fontSize = 11;

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });

//                     // Increase font size for header
//                     doc.content[1].table.headerRows = 2; // Make sure header is only shown once
//                     doc.styles.tableHeader.fontSize = 14; // Set font size for header
//                     doc.styles.tableHeader.alignment = 'center';

//                     // Get the updated month name from the table
//                     var updatedMonth = $('#example tbody tr:first-child td:nth-child(7)').text();

//                     // Update month name in PDF, excluding the header rows
//                     doc.content[1].table.body.forEach(function(row, index) {
//                         if (index >= doc.content[1].table.headerRows) {
//                             row[6].text = updatedMonth;
//                         }
//                     });
//                 }
//             }, 
//             'print', 
//             {
//                 text: 'Change Month',
//                 action: function(e, dt, node, config) {
//                     var selectedMonth = prompt("Enter the month (e.g., January, February, etc.):");
//                     if (selectedMonth) {
//                         // Update the month name for all rows
//                         table.column(6).nodes().to$().text(selectedMonth);
//                         // Redraw the DataTable to reflect the changes
//                         table.draw();
//                     }
//                 }
//             },
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     // Update month automatically
//     var currentDate = new Date();
//     var currentMonth = currentDate.getMonth() + 2; // January is 0

//     if (currentMonth === 4) {
//         // Update the month name for all rows
//         table.column(5).nodes().to$().text('April');
//     }

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });






// Upper this one Good



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
//                     doc.defaultStyle.fontSize = 11;

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });

//                     // Get the updated month name from the table
//                     var updatedMonth = $('#example tbody tr:first-child td:nth-child(7)').text();

//                     // Update month name in PDF
//                     doc.content[1].table.body.forEach(function(row, index) {
//                         row[6].text = updatedMonth;
//                     });
//                 }
//             }, 
//             'print', 
//             {
//                 text: 'Change Month',
//                 action: function(e, dt, node, config) {
//                     var selectedMonth = prompt("Enter the month (e.g., January, February, etc.):");
//                     if (selectedMonth) {
//                         // Update the month name for all rows within the tbody
//                         $('#example tbody td:nth-child(7)').text(selectedMonth);
//                     }
//                 }
//             },
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     // Update month automatically
//     var currentDate = new Date();
//     var currentMonth = currentDate.getMonth() + 2; // January is 0

//     if (currentMonth === 4) {
//         // Update the month name for all rows within the tbody
//         $('#example tbody td:nth-child(7)').text('April');
//     }

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
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
//                     doc.defaultStyle.fontSize = 11;

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });

//                     // Increase font size for tbody (body)
//                     doc.content[1].table.body.forEach(function(row) {
//                         row.forEach(function(cell) {
//                             cell.fontSize = 11;
//                         });
//                     });

//                     // Get the updated month name from the table
//                     var updatedMonth = $('#example tbody tr:first-child td:nth-child(7)').text();

//                     // Update month name in PDF, excluding the header rows
//                     doc.content[1].table.body.forEach(function(row, index) {
//                         if (index >= doc.content[1].table.headerRows) {
//                             row[6].text = updatedMonth;
//                         }
//                     });
//                 }
//             }, 
//             'print', 
//             {
//                 text: 'Change Month',
//                 action: function(e, dt, node, config) {
//                     var selectedMonth = prompt("Enter the month (e.g., January, February, etc.):");
//                     if (selectedMonth) {
//                         // Update the month name for all rows
//                         table.column(6).nodes().to$().text(selectedMonth);
//                         // Redraw the DataTable to reflect the changes
//                         table.draw();
//                     }
//                 }
//             },
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     // Update month automatically
//     var currentDate = new Date();
//     var currentMonth = currentDate.getMonth() + 2; // January is 0

//     if (currentMonth === 4) {
//         // Update the month name for all rows
//         table.column(6).nodes().to$().text('April');
//     }

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });


// Need Also Tha

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

                    // Apply text-center class to 9th and 10th columns in PDF
                    doc.content[1].table.body.forEach(function(row) {
                        row[8].alignment = 'center'; // 9th column alignment
                        row[9].alignment = 'center'; // 10th column alignment
                    });

                    // Increase font size for tbody (body)
                    doc.content[1].table.body.forEach(function(row) {
                        row.forEach(function(cell) {
                            cell.fontSize = 11;
                        });
                    });

                    // Get the updated month name from the table
                    var updatedMonth = $('#example tbody tr:first-child td:nth-child(7)').text();

                    // Update month name in PDF, excluding the header rows
                    doc.content[1].table.body.forEach(function(row, index) {
                        if (index >= doc.content[1].table.headerRows) {
                            row[6].text = updatedMonth;
                        }
                    });
                }
            }, 
            'print', 
            {
                text: 'Change Month',
                action: function(e, dt, node, config) {
                    var selectedMonth = prompt("Enter the month (e.g., January, February, etc.):");
                    if (selectedMonth) {
                        // Update the month name for all rows
                        table.column(6).nodes().to$().text(selectedMonth);
                        // Redraw the DataTable to reflect the changes
                        table.draw();
                    }
                }
            },
            'add', 
            'remove'
        ],
        columnDefs: [
            { targets: 9, className: 'dt-wrap' } // Enable text wrapping for column 10
        ]
    });

    // Apply text-center class to 9th column
    table.column(8).nodes().to$().addClass('text-center');

    // Update month automatically
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth() + 2; // January is 0

    if (currentMonth === 4) {
        // Update the month name for all rows
        table.column(6).nodes().to$().text('April');
    }

    table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
});



// Random code
















// good exeses
// $(document).ready(function() {
//     var password = "your_password"; // Change this to your desired password
//     var table = $('#example').DataTable({
//         buttons: [
//             'copy', 
//             'csv', 
//             'excel', 
//             {
//                 extend: 'pdf',
//                 text: 'PDF', // Button text
//                 action: function (e, dt, button, config) {
//                     var enteredPassword = prompt("Enter password to download the PDF file:");
//                     if (enteredPassword === password) {
//                         $.fn.DataTable.ext.buttons.pdfHtml5.action.call(this, e, dt, button, config);
//                     } else {
//                         alert("Incorrect password! Please try again.");
//                     }
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });


// $(document).ready(function() {
//     var table = $('#example').DataTable({
//         select: true, // Enable row selection
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
//                     doc.defaultStyle.fontSize = 11;

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });

//                     // Increase font size for header
//                     doc.content[1].table.headerRows = 1; // Make sure header is only shown once
//                     doc.styles.tableHeader.fontSize = 14; // Set font size for header
//                     doc.styles.tableHeader.alignment = 'center'
//                 }
//             }, 
//             'print', 
//             {
//                 text: 'Add Data',
//                 action: function () {
//                     var selectedRowsData = table.rows({selected: true}).data().toArray();
//                     console.log(selectedRowsData); // This will print the selected rows' data in the console
//                     // Implement your logic to add data using the selected rows' data
//                 }
//             },
//             {
//                 text: 'Remove Data',
//                 action: function () {
//                     var selectedRowsData = table.rows({selected: true}).data().toArray();
//                     console.log(selectedRowsData); // This will print the selected rows' data in the console
//                     // Implement your logic to remove data using the selected rows' data
//                 }
//             }
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
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
//                     doc.defaultStyle.fontSize = 11;

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });

//                     // Increase font size for header
//                     doc.content[1].table.headerRows = 1; // Make sure header is only shown once
//                     doc.styles.tableHeader.fontSize = 14; // Set font size for header
//                     doc.styles.tableHeader.alignment = 'center'
//                 }
//             }, 
//             'print', 
//             {
//                 text: 'Add Data',
//                 action: function () {
//                     var password = prompt("Enter password to add data:");
//                     if (password === "4012") {
//                         table.row.add([
//                             'New Data 1',
//                             'New Data 2',
//                             'New Data 3',
//                             'New Data 4',
//                             'New Data 5',
//                             'New Data 6',
//                             'New Data 7',
//                             'New Data 8',
//                             'New Data 9',
//                             'New Data 10'
//                         ]).draw(false);
//                     } else {
//                         alert("Incorrect password! Data not added.");
//                     }
//                 }
//             },
//             {
//                 text: 'Remove Data',
//                 action: function () {
//                     var password = prompt("Enter password to remove data:");
//                     if (password === "4012") {
//                         table.row(':last').remove().draw(false);
//                     } else {
//                         alert("Incorrect password! Data not removed.");
//                     }
//                 }
//             }
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
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
//                     doc.defaultStyle.fontSize = 11;

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });

//                     // Increase font size for header
//                     doc.content[1].table.headerRows = 1; // Make sure header is only shown once
//                     doc.styles.tableHeader.fontSize = 14; // Set font size for header
//                     doc.styles.tableHeader.alignment = 'center';

//                     // Add page numbers
//                     var pageCount = doc.internal.getNumberOfPages();
//                     for (var i = 1; i <= pageCount; i++) {
//                         doc.setPage(i);
//                         doc.setFontSize(11);
//                         doc.text('Page ' + i + ' of ' + pageCount, doc.internal.pageSize.width - 60, 10);
//                     }
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
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
//                     doc.defaultStyle.fontSize = 11;

// //                     // Add table borders
//                     doc.content[1].table.widths = Array(doc.content[1].table.body[0].length + 1).join('*').split('');
//                     doc.content[1].table.body.forEach(function(row, i) {
//                         row.forEach(function(cell, j) {
//                             if (cell.text !== undefined) {
//                                 if (i === 0) {
//                                     cell.fillColor = 'black'; // Header background color
//                                 }
//                                 cell.border = [0.3, 0.3, 0.3, 0.3]; // Set border for all cells
//                             }
//                         });
//                     });

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns in DataTable
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });









// 




  
    


