'use client'

import { useState } from 'react'
import { showToast } from '@/lib/toast'

export default function ContactForm() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            // Form submission logic will go here
            showToast.success('Message sent successfully!')
        } catch (error) {
            showToast.error('Failed to send message')
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            {/* Form fields will go here */}
        </form>
    )
} 