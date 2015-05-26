Package.describe({
  name: 'benjick:accounts-password-debugonly',
  version: '0.1.0',
  summary: 'Adds accounts-password with debugOnly',
  git: '',
  debugOnly: true,
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('accounts-password');
});