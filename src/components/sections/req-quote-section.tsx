"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {MoveRight} from "lucide-react";

const RequestQuoteForm = () => {
    return (
        <section className="w-full py-16 flex justify-center overflow-hidden">
            <div className="max-w-screen-lg w-full px-6">
                <h2 className="font-heading text-subheadingSm text-center mb-6">REQUEST A QUOTE</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" type="text" placeholder="Your Name" />
                        </div>
                        <div>
                            <Label htmlFor="email">E-mail</Label>
                            <Input id="email" type="email" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" placeholder="Your Phone Number" />
                        </div>
                        <div>
                            <Label htmlFor="timeframe">Time Frame *</Label>
                            <Select>
                                <SelectTrigger id="timeframe">
                                    <SelectValue placeholder="Choose Time Frame" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1week">1 Week</SelectItem>
                                    <SelectItem value="2weeks">2 Weeks</SelectItem>
                                    <SelectItem value="1month">1 Month</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="size">Size *</Label>
                            <Select>
                                <SelectTrigger id="size">
                                    <SelectValue placeholder="Choose Size" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="small">Small</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="large">Large</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="quantity">Quantity *</Label>
                            <Select>
                                <SelectTrigger id="quantity">
                                    <SelectValue placeholder="Choose Quantity" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="5">5</SelectItem>
                                    <SelectItem value="10">10</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="project">Please Describe Your Project *</Label>
                        <Textarea id="project" placeholder="Choose a project type" rows={4} />
                    </div>
                    <p className="text-sm text-center text-gray-500">
                        By submitting this form you agree to our <a href="#" className="text-p2 underline">Terms of Service</a> and <a href="#" className="text-p2 underline">Privacy Policy</a>.
                    </p>
                    <div className="flex justify-center">
                        <Button variant="default" className="bg-p1 hover:bg-p1/90 h-10 text-white px-4 py-2 rounded-md font-semibold tracking-wider flex items-center gap-2">
                            Lorem Ipsum <MoveRight />
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default RequestQuoteForm;
