angular.module('myApp')
	.factory('DateFormatFactory', function (){
		var DateFormatFactory = {};

		DateFormatFactory.getCurrentDate = function(type) {
			var today = new Date();
	        var dd = ((today.getDate() < 10)?"0":"") + today.getDate();
	        var mm = (((today.getMonth() + 1) < 10)?"0":"") + (today.getMonth() + 1);
	        var yyyy = today.getFullYear();
            var hours = ((today.getHours() < 10)?"0":"") + today.getHours();
            var mins = ((today.getMinutes() < 10)?"0":"") + today.getMinutes();

			if (type == 'with_time'){
				return dd + '.' + mm + '.' + yyyy + '. ' + hours + ':' + mins;
			} else {
				return dd + '.' + mm + '.' + yyyy + '. ';
			}
		};

        DateFormatFactory.formatForDB = function(date){
            var _tempDate;
            var _day = "";
            var _month = "";
            var _year = "";
            var _hours = "";
            var _minutes = "";
            var _seconds = "";

            _tempDate = prepareDate(date);

            if (_tempDate.length == 12){ // if full date-time is given
                _day = _tempDate.substring(0, 2);
                _month = _tempDate.substring(2, 4);
                _year = _tempDate.substring(4, 8);
                _hours = _tempDate.substring(8, 10);
                _minutes = _tempDate.substring(10,12);
                _seconds = '00';

                return _year + '-' + _month + '-' + _day + ' ' + _hours + ':' + _minutes + ':' + _seconds;

            } else if (_tempDate.length == 14){ // if seconds are not given
                _day = _tempDate.substring(0, 2);
                _month = _tempDate.substring(2, 4);
                _year = _tempDate.substring(4, 8);
                _hours = _tempDate.substring(8, 10);
                _minutes = _tempDate.substring(10,12);
                _seconds = _tempDate.substring(12, 14);

                return _year + '-' + _month + '-' + _day + ' ' + _hours + ':' + _minutes + ':' + _seconds;
            } else if (_tempDate.length == 8) { // if time is not given
                _day = _tempDate.substring(0, 2);
                _month = _tempDate.substring(2, 4);
                _year = _tempDate.substring(4, 8);
                _hours = '00';
                _minutes = '00';
                _seconds = '00';

                return _year + '-' + _month + '-' + _day + ' ' + _hours + ':' + _minutes + ':' + _seconds;
            } else {
                console.error('Date provided is invalid! Please forward date in this format: DD.MM.YYYY hh:mm:ss');
            }
        };

        DateFormatFactory.formatForUser = function(date, type){
            var _day = "";
            var _month = "";
            var _year = "";
            var _hours = "";
            var _minutes = "";
            var _seconds = "";
            var _tempDate = "";

            _tempDate = prepareDate(date);

            if (_tempDate.length == 14){
                _year = _tempDate.substring(0, 4);
                _month = _tempDate.substring(4, 6);
                _day = _tempDate.substring(6, 8);
                _hours = _tempDate.substring(8, 10);
                _minutes = _tempDate.substring(10, 12);
                _seconds = _tempDate.substring(12, 14);

                if (type == "with_time"){
                    return _day + '.' + _month + '.' + _year + '. ' + _hours + ':' + _minutes + ':' + _seconds;
                }
                else {
                    return _day + '.' + _month + '.' + _year + '.';
                }
            }
            else if (_tempDate.length == 8){
                _year = _tempDate.substring(0, 4);
                _month = _tempDate.substring(4, 6);
                _day = _tempDate.substring(6, 8);

                return _day + '.' + _month + '.' + _year + '. ';
            }
        };

        function prepareDate (date) {
            var _tempDate = date.replace(/\.| |:|-/g, '');
            return _tempDate.trim();
        };

		return DateFormatFactory;
	});
