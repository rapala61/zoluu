set :stage, :staging
role :app, %w{rafaelp2@50.87.248.124}
role :web, %w{rafaelp2@50.87.248.124}
role :db, %w{rafaelp2@50.87.248.124}
set :ssh_options, {
 keys: %w(~/.ssh/id_rsa_rp),
 forward_agent: true,
 auth_methods: %w(publickey)
}
