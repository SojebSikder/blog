<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Blog::create([
            'id' => '1',
            'user_id' => '1',
            'title' => 'Hello World',
            'body' => '২০১৬ সালে অক্সফোর্ড ডিকশনারির বর্ষসেরা শব্দ ছিল পোস্ট-ট্রুথ। পোস্ট-ট্রুথ বলতে বোঝায় একটা ঘটনার পেছনে থাকা মূল কারণকে অগ্রাহ্য করে আবেগ ও ব্যক্তিগত মত দিয়ে ব্যাখ্যা করা। এই শব্দটা বহুল ব্যবহৃত হয় ডোনাল্ড ট্রাম্পের প্রেসিডেন্সির সময়ে ও ব্রেক্সিট গণভোটের সময়। উদাহরণ হিসাবে বলা যায় ২০১৭ সালের ডোনাল্ড ট্রাম্পের অভিষেক অনুষ্ঠানের কথা।

            তিনি দাবি করেন, আমেরিকার প্রেসিডেন্টদের ইতিহাসে সবচেয়ে বেশি দর্শক-সমর্থক জড়ো হয়েছিল তার অভিষেক অনুষ্ঠানে। যদিও সেটা ছিল পুরো মিথ্যা কথা। তিনি চার বছর প্রেসিডেন্ট থাকার সময়ে এরকম আরো হাজার হাজার মিথ্যা বলেছেন। প্রকৃত ব্যাখ্যা স্পষ্ট থাকা স্বত্ত্বেও মেনে নেননি। গত প্রেসিডেন্ট নির্বাচনেও তিনি দাবি করেন, আমেরিকানদের ভোটে তিনি দ্বিতীয়বারের মতো প্রেসিডেন্ট নির্বাচিত হয়েছেন। তার সাথে প্রতারণা করা হয়েছে। ',
            'name' => 'hello-world',
            'published' => '1',
        ]);
        Blog::create([
            'id' => '2',
            'user_id' => '1',
            'title' => 'What is django',
            'body' => 'Components

            Screenshot of the Django admin interface for modifying a user account
            Despite having its own nomenclature, such as naming the callable objects generating the HTTP responses "views",[9] the core Django framework can be seen as an MVC architecture.[10] It consists of an object-relational mapper (ORM) that mediates between data models (defined as Python classes) and a relational database ("Model"), a system for processing HTTP requests with a web templating system ("View"), and a regular-expression-based URL dispatcher ("Controller").
            
            Also included in the core framework are:
            
            a lightweight and standalone web server for development and testing
            a form serialization and validation system that can translate between HTML forms and values suitable for storage in the database
            a template system that utilizes the concept of inheritance borrowed from object-oriented programming
            a caching framework that can use any of several cache methods
            support for middleware classes that can intervene at various stages of request processing and carry out custom functions
            an internal dispatcher system that allows components of an application to communicate events to each other via pre-defined signals
            an internationalization system, including translations of Djangos own components into a variety of languages
            a serialization system that can produce and read XML and/or JSON representations of Django model instances
            a system for extending the capabilities of the template engine
            an interface to Pythons built-in unit test framework
            Bundled applications
            The main Django distribution also bundles a number of applications in its "contrib" package, including:
            
            an extensible authentication system
            the dynamic administrative interface
            tools for generating RSS and Atom syndication feeds
            a "Sites" framework that allows one Django installation to run multiple websites, each with their own content and applications
            tools for generating Google Sitemaps
            built-in mitigation for cross-site request forgery, cross-site scripting, SQL injection, password cracking and other typical web attacks, most of them turned on by default[22][23]
            a framework for creating GIS applications',
            'name' => 'what-is-django',
            'published' => '1',
        ]);
    }
}
