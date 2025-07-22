import { Shield, Zap, Eye, CheckCircle, XCircle, AlertTriangle, ArrowRight, Play, Users, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-security.jpg";
import dashboardImage from "@/assets/dashboard-mockup.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="feature-icon w-8 h-8">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-primary">PhishGuard</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How it Works</a>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#demo" className="text-muted-foreground hover:text-primary transition-colors">Demo</a>
              <Button className="btn-hero">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Stop Phishing
                  <span className="text-gradient block">Before It Hooks</span>
                </h1>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  PhishGuard analyzes suspicious links in real-time, protecting your organization from sophisticated phishing attacks with AI-powered threat detection.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero group">
                  Try PhishGuard Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button className="btn-secondary">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="PhishGuard Security Dashboard"
                className="rounded-2xl shadow-2xl animate-float"
              />
              <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-lg animate-pulse-slow">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-success" />
                  <div>
                    <div className="font-semibold text-card-foreground">Link Verified</div>
                    <div className="text-sm text-muted-foreground">99.9% Safe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-muted-foreground mb-8">Trusted by leading organizations worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Users className="w-6 h-6" />
                <span className="font-semibold">50K+ Users</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Globe className="w-6 h-6" />
                <span className="font-semibold">120+ Countries</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Shield className="w-6 h-6" />
                <span className="font-semibold">99.8% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="w-6 h-6" />
                <span className="font-semibold">24/7 Protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How PhishGuard Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI algorithms analyze links in milliseconds to detect and prevent phishing attempts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="feature-icon mx-auto">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Real-Time Scanning</h3>
              <p className="text-muted-foreground">
                Every link is instantly analyzed using our proprietary threat intelligence database and machine learning models.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="feature-icon mx-auto">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Threat Analysis</h3>
              <p className="text-muted-foreground">
                Advanced pattern recognition identifies suspicious domains, URL structures, and phishing indicators.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="feature-icon mx-auto">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Instant Protection</h3>
              <p className="text-muted-foreground">
                Malicious links are blocked immediately with detailed threat reports for your security team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Protection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade security features designed to protect your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="security-card">
              <CardContent className="p-6 space-y-4">
                <div className="feature-icon">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Sub-second response times ensure no delays in your workflow while maintaining maximum security.
                </p>
              </CardContent>
            </Card>

            <Card className="security-card">
              <CardContent className="p-6 space-y-4">
                <div className="feature-icon">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Global Threat Intel</h3>
                <p className="text-muted-foreground">
                  Access to the world's largest threat intelligence database with real-time updates.
                </p>
              </CardContent>
            </Card>

            <Card className="security-card">
              <CardContent className="p-6 space-y-4">
                <div className="feature-icon">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Team Management</h3>
                <p className="text-muted-foreground">
                  Centralized dashboard for managing user permissions and monitoring security events.
                </p>
              </CardContent>
            </Card>

            <Card className="security-card">
              <CardContent className="p-6 space-y-4">
                <div className="feature-icon">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Detailed Reports</h3>
                <p className="text-muted-foreground">
                  Comprehensive threat analysis with actionable insights for your security operations.
                </p>
              </CardContent>
            </Card>

            <Card className="security-card">
              <CardContent className="p-6 space-y-4">
                <div className="feature-icon">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">API Integration</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate with your existing security stack and workflow tools.
                </p>
              </CardContent>
            </Card>

            <Card className="security-card">
              <CardContent className="p-6 space-y-4">
                <div className="feature-icon">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">24/7 Monitoring</h3>
                <p className="text-muted-foreground">
                  Round-the-clock protection with instant alerts for critical security threats.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">See PhishGuard in Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Live demonstration of how PhishGuard analyzes and protects against malicious links
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="security-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">Sample Scan Results</h3>
                    <span className="status-safe">Live Demo</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-success">✓ Safe Link Detected</h4>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="font-mono text-sm text-muted-foreground mb-2">
                          https://secure-banking.com/login
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="status-safe">Verified Safe</span>
                          <span className="text-sm text-muted-foreground">• Scanned in 0.23s</span>
                        </div>
                      </div>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>✓ SSL Certificate Valid</li>
                        <li>✓ Domain Reputation: Excellent</li>
                        <li>✓ No Suspicious Patterns</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-danger">⚠ Phishing Attempt Blocked</h4>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="font-mono text-sm text-muted-foreground mb-2">
                          https://secure-bank1ng.net/urgent-login
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="status-danger">High Risk</span>
                          <span className="text-sm text-muted-foreground">• Blocked in 0.18s</span>
                        </div>
                      </div>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>⚠ Suspicious Domain Pattern</li>
                        <li>⚠ Recently Registered Domain</li>
                        <li>⚠ Mimicking Known Brand</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <img 
                      src={dashboardImage} 
                      alt="PhishGuard Dashboard"
                      className="rounded-lg shadow-lg max-w-full h-auto"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join thousands of companies protecting their teams with PhishGuard's advanced threat detection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero text-lg px-10 py-4">
                Start Free 14-Day Trial
              </Button>
              <Button className="btn-secondary text-lg px-10 py-4">
                Schedule Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-primary-foreground/80">
              <span>✓ No credit card required</span>
              <span>✓ Setup in under 5 minutes</span>
              <span>✓ 24/7 expert support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="feature-icon w-8 h-8">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-primary">PhishGuard</span>
            </div>
            
            <div className="flex space-x-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 PhishGuard. All rights reserved. Protecting organizations worldwide.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
