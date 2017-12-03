module.exports = {
    name: 'core.plugin.monitor',
    dependencies: [
        'core.plugin.emitter',
    ],
    extend: {
        monitor(type, data){
            this.emit('core.monitor', {
                type: type,
                data: data
            });
        }
    }
};