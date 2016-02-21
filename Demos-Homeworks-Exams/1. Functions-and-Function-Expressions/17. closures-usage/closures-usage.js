var database = function() {
    var records,
        lastId,
        self;

    function saveRecord(record) {
        // ne triabva da e !lastId, tai kato i 0 e falsy
        if (lastId === undefined) {
            lastId = 0;
        }
        if (!records) {
            records = [];
        }
        record.id = ++lastId;
        records.push(record);
        return self;
    }

    function findRecordById(id) {
        var i,
            record;
        if (!records) {
            return null;
        }
        for (i = 0; i < records.length; i += 1) {
            record = records[i];
            if (record.id === id) {
                return record;
            }
        }
        return null;
    }

    function getAllRecords() {
        var clonedRecords,
            i;
        clonedRecords = [];
        // ne moga da razbera za kakvo mi e tova
        clonedRecords[records.length - 1] = undefined;  //[ , , undefined ]
        for (i = 0; i < records.length; i += 1) {
            clonedRecords[i] = records[i];
        }
        return clonedRecords;
    }
    // vajnoto e da varnem samite funkcii, ne izpalneneto im, i.e. saveRecords()
    self = {
        save    : saveRecord,
        findById: findRecordById,
        getAll  : getAllRecords
    };

    return self;
}();

database.save({
                  name: 'Peter',
                  age : 13
              })
        .save({
                  name: 'Gosho',
                  age : 17
              })
        .save(database);

console.log("database.getAll()");
console.log(database.getAll());

console.log("database.findById(3)");
console.log(database.findById(3));