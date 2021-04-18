pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/csmper/react-app.git', branch: 'develop', changelog: true)
      }
    }

  }
}