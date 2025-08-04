<template>
    <div>
        <Navi />
        <div class="main res-py">
            <h1>PRIVACY POLICY</h1><br>
            <h5>At Yathra Tours and Travels ("Yathra," "we," "our," or "us"), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, book our tour services, or interact with us in any way. By using our services, you consent to the practices described in this Privacy Policy.</h5>

            <h3>1. Information We Collect</h3>
            <ol type="a">
                <li>Personal Information: When you book a tour or interact with us, we may collect personal information such as your name, email address, phone number, postal address, passport information, and payment details.</li>
                <li>Travel Preferences: We may collect information about your travel preferences, dietary requirements, medical conditions, and other relevant details to ensure a comfortable and enjoyable experience during the tour.</li>
                <li>Website Usage Information: We may automatically collect certain information about your visit to our website, such as your IP address, browser type, device information, and browsing patterns. This information is used to improve our website and enhance your user experience.</li>
            </ol>
            <h3>2. How We Use Your Information</h3>
            <ol type="a">
                <li>Tour Services: We use your personal information to provide you with our tour services, process bookings, and fulfill your travel-related requests.</li>
                <li>Communication: We may use your contact information to send you important updates, notifications, marketing materials, and respond to your inquiries.</li>
                <li>Personalization: Your travel preferences and information may be used to customize and enhance your tour experience.</li>
                <li>Legal Obligations: We may use and disclose your personal information to comply with applicable laws, regulations, legal processes, or enforceable government requests.</li>
                <li>Analytics and Improvements: We use website usage information for analytics and to improve the functionality and content of our website.</li>
            </ol>
            <h3>3. How We Share Your Information</h3>
            <ol type="a">
                <li>Third-party Service Providers: We may share your personal information with third-party service providers who assist us in delivering our tour services, such as accommodation providers, transportation companies, tour guides, and payment processors. These providers are contractually obligated to protect your information and only use it for the purposes specified by us.</li>
                <li>Business Partners: We may share your information with our business partners to provide you with relevant services and offers that may interest you.</li>
                <li>Legal Compliance: We may disclose your information to comply with legal obligations, protect our rights, privacy, safety, or property, or respond to law enforcement requests.</li>
                <li>Consent: We will share your information with third parties other than those mentioned above only with your explicit consent.</li>
            </ol>
            <h3>4. Data Security</h3>
            <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, or alteration. However, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee the absolute security of your information.</p>
            <h3>5. Your Choices and Rights</h3>
            <ol type="a">
                <li>Marketing Communications: You have the right to opt-out of receiving marketing communications from us at any time. You can do this by following the instructions in the communication or by contacting us directly.</li>
                <li>Access and Update: You have the right to access and update your personal information. If you want to access or correct any information we hold, please contact us.</li>
                <li>Data Retention: We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.</li>
            </ol>
            <h3>6. Third-party Links</h3>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. Please review the privacy policies of these websites before providing any personal information.</p>
            <h3>7. Children's Privacy</h3>
            <p>Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information without your consent, please contact us, and we will take appropriate action to remove the information.</p>
            <h3>8. Changes to the Privacy Policy</h3>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated policy will be posted on our website with the effective date, and we encourage you to review it periodically.</p>
            <h3>9. Contact Us</h3>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at:</p>
            <p>Yathra Tours and Travels</p>
            <p>Address: Yathra Tours & Travels (PVT) Ltd, No 14/2, Rowan Place, Bandarawatha</p>
            <p>Email: info@yathratours.com</p>
            <p>Phone: +94771602526</p>
            <p>By using our services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your personal information as described herein.</p>
            <br>
            <!-- <p class="last-modified">Last modified: Jan 01, 2023.</p> -->
        </div>
    </div>
</template>

<script>
import Navi from '../components/navigation-com.vue'

export default {
    components: {
        Navi,
    }
}
</script>

<style scoped>
    h1{
        margin-top: 100px;
        text-align: center;
    }

    h3{
        margin-top: 50px;
    }

    h5{
        text-align: center;
    }

    .last-modified{
        text-align: end;
    }

    .main{
        min-height: 100vh;
    }
</style>