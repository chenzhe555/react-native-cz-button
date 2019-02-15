
Pod::Spec.new do |s|
  s.name         = "RNCzButton"
  s.version      = "1.0.0"
  s.summary      = "RNCzButton"
  s.description  = "RN Button组件"
  s.homepage     = "https://github.com/chenzhe555/react-native-cz-button"
  s.license      = { :type => "MIT", :file => "LICENSE" }
  s.author       = { "author" => "376811578@qq.com" }
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/chenzhe555/react-native-cz-button.git", :tag => s.version }
  s.source_files = "*.{h,m}"
  s.requires_arc = true
  s.dependency "React"
  #s.dependency "others"

end

  