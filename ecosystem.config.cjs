module.exports = {
    apps: [
      {
        name: 'fannam',
        port: '3000',
        script: './.output/server/index.mjs',
  
        max_memory_restart: "300M",
        out_file: "./logs/out.log",
        error_file: "./logs/error.log",
        merge_logs: true,
        log_date_format: "DD-MM HH:mm:ss Z",
        log_type: "json",
      }
    ],
    deploy: {
      production: {
        user: 'root',
        host: ['213.110.228.1'],
        ref: 'origin/main',
        repo: 'git@github.com:nux7jr/fannam.git',
        ssh_options: ['ForwardAgent=yes'],
        path: '/var/www/fannam',
        "pre-deploy": "git fetch --all",
        'post-deploy': 'npm i && npm run build && pm2 startOrRestart ecosystem.config.cjs --env production setup'
      }
    }
  }