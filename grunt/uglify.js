module.exports = {
  dep: {
    files: {
      'client/lib/angular-md5/angular-md5.min.js': ['client/lib/angular-md5/angular-md5.js'],
      'client/lib/angular-route/angular-route.min.js': ['client/lib/angular-route/angular-route.js'],
      'client/lib/angular-sanitize/angular-sanitize.min.js': ['client/lib/angular-sanitize/angular-sanitize.js'],
      'client/lib/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js': ['client/lib/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js'],
      'client/lib/angular/angular.min.js': ['client/lib/angular/angular.js'],
      'client/lib/ng-file-upload/angular-file-upload.min.js': ['client/lib/ng-file-upload/angular-file-upload.js'],
      'client/lib/qrcode-generator/qrcode.min.js': ['client/lib/qrcode-generator/qrcode.js'],
      'client/lib/revolunet-angular-carousel/angular-carousel.min.js': ['client/lib/revolunet-angular-carousel/angular-carousel.js']
    }
  },
  dist: {
    files: [{
      expand: true,
      cwd: 'client/javascripts',
      src: ['**/*.js'],
      dest: 'dist/javascripts'
    }]
  }
};
