set :production
role :app, %w{zoluu02@107.180.56.176}
role :web, %w{zoluu02@107.180.56.176}
role :db, %w{zoluu02@107.180.56.176}
set :deploy_to, '/home/zoluu02/public_html/zoluu'
set :tmp_dir, '/home/zoluu02/tmp/capistrano'
set :ssh_options, {
 keys: %w(~/.ssh/id_rsa_zoluu_www),
 forward_agent: true,
 auth_methods: %w(publickey)
}
