module.exports = {
    apps: [{
        name: 'myfreelance-api',
        script: './src/app.js',
        instances: 1,
        autorestart: true,
        watch: false,
        instance_var: 'INSTANCE_ID'
    }],
};